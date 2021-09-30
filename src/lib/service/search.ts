import client from './client';

const SEARCH = '/cgi/search.pl';

interface Config {
  [key: string]: string;
}

const DEFAULT_PARAMS = {
  json: '1',
  search_simple: '1',
  action: 'process',
};
export const search = async (search_terms: string, config?: Config) => {
  const res = await client.get(SEARCH, { params: { search_terms, ...DEFAULT_PARAMS, ...config } });
  return res.data;
};
