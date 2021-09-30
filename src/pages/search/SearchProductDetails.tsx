import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import ProductDetails, { ProductDetailsLine } from '../../components/ProductDetails/ProductDetails';
import { getByID } from '../../lib/service/product';

export function SearchProductDetails() {
  let params: any = useParams();

  const { data, error, status } = useQuery(['products', params.id], () => {
    return getByID(params.id);
  });

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (error === 'error') {
    return <span>Error</span>;
  }

  const details: ProductDetailsLine[] = [
    { label: 'Categories', value: data.product.categories },
    { label: 'Countries', value: data.product.countries },
    { label: 'Countries', value: data.product.countries },
    { label: '...', value: '...' },
  ];

  // also status === 'success', but "else" logic works, too
  return (
    <div className="p-2">
      <img
        src={
          data.product.selected_images?.front?.fr ||
          data.product.image_front_url ||
          data.product.image_ingredients_url
        }
        alt={data.product.brands}
        className="m-auto"
      />
      <h3 className="text-center text-xl my-2">{data.product.brands}</h3>
      <p className="text-sm text-justify text-gray-600">{data.product.ingredients_text}</p>
      <ProductDetails products={details} />
    </div>
  );
}
