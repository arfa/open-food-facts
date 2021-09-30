import client from './client';

const GET_BY_ID = (id: string) => `/api/v0/product/${id}.json`;

export const getByID = async (id: string) => {
  const res = await client.get(GET_BY_ID(id));
  return res.data;
};
