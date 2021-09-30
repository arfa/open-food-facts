import axios from 'axios';

const BASE_URL = 'https://fr.openfoodfacts.org';

const client = axios.create({
  baseURL: `${BASE_URL}`,
});

export default client;
