import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useHistory } from 'react-router';

import Button from '../../components/Button/Button';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchInput from '../../components/SearchInput';
import Select, { SelectOption } from '../../components/Select';
import { search } from '../../lib/service/search';

const PAGE_SIZE_DEFAULT = '10';
const CURRENT_PAGE_DEFAULT = '1';

const OPTIONS_LIST: SelectOption[] = [
  { label: '20 products', value: PAGE_SIZE_DEFAULT },
  { label: '50 products', value: 50 },
  { label: '100 products', value: 100 },
  { label: '250 products', value: 250 },
  { label: '500 products', value: 500 },
  { label: '1000 products', value: 1000 },
];

export function SearchProduct() {
  const history = useHistory();
  let params = new URLSearchParams(document.location.search.substring(1));

  const queryClient = useQueryClient();
  const [page, setPage] = useState(params.get('page') || CURRENT_PAGE_DEFAULT);
  const [pageSize, setPageSize] = useState(params.get('page_size') || PAGE_SIZE_DEFAULT);
  const [searchName, setSearchName] = useState(params.get('searchName') || undefined);

  const { data, error, status } = useQuery(['products', searchName, page, pageSize], () => {
    return search(searchName, { page, page_size: pageSize });
  });

  // Prefetch the next page!
  useEffect(() => {
    if (data?.page * data?.page_count < data?.count) {
      queryClient.prefetchQuery(['products', searchName, `${Number(page) + 1}`], () =>
        search(searchName, { page: `${Number(page) + 1}`, page_size: pageSize })
      );
    }
  }, [data, page, pageSize, queryClient, searchName]);

  useEffect(() => {
    const search_params = new URLSearchParams();
    searchName
      ? search_params.append('searchName', searchName)
      : search_params.delete('searchName');

    page ? search_params.append('page', page) : search_params.delete('page');

    pageSize ? search_params.append('page_size', pageSize) : search_params.delete('page_size');

    history.replace({ search: search_params.toString() });
  }, [searchName, history, page, pageSize]);

  return (
    <>
      <div className='flex flex-col md:flex-row mb-8 p-2 md:p-0'>
        <SearchInput
          defaultValue={searchName}
          className='mb-4 md:mb-0'
          onSubmit={(query: string) => {
            setPage(CURRENT_PAGE_DEFAULT);
            setSearchName(query);
            history.push(`/`, { searchName });
          }}
        />
        <Select
          optionList={OPTIONS_LIST}
          defaultValue={OPTIONS_LIST[0]}
          label='Per Page'
          className='w-32 mb-4 md:mb-0 ml-0 md:ml-4 md:mr-auto'
          onChange={(selected) => setPageSize(selected.value)}
        />
        <div className='btn-group content-end mb-4 md:mb-0'>
          <Button
            className='btn-outline'
            onClick={() => setPage((old) => `${Math.max(Number(old) - 1, 0)}`)}
            disabled={page === '1'}
          >
            Previous
          </Button>
          <Button
            className='btn-outline'
            onClick={() => {
              setPage((old) =>
                data?.page * data?.page_count < data?.count ? `${Number(old) + 1}` : old
              );
            }}
            disabled={data?.page * data?.page_count >= data?.count}
          >
            Next
          </Button>
        </div>
      </div>
      {!!error && <span>Error !</span>}
      {status === 'loading' && <span>Loading...</span>}
      <div className='grid sm:grid-cols-1 sm:gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 2xl:gap-6 2xl:grid-cols-6 mb-8 p-2 md:p-0'>
        {data?.products.map((product: any, i: number) => (
          <ProductCard
            image={
              product.selected_images?.front?.thumb?.fr ||
              product.image_front_thumb_url ||
              product.image_ingredients_thumb_url
            }
            name={
              product.product_name ||
              product.product_name_fr ||
              product.product_name_fr_imported ||
              product.product_name_en
            }
            nutriscore={product.nutriscore_grade || 'unknown'}
            novagroup={product.nova_group || 'unknown'}
            className='mt-4'
            key={`product-${i}`}
            onClick={() => history.push(`/product/${product.id}`)}
          />
        ))}
      </div>
    </>
  );
}
