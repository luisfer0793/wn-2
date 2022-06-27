import axios from 'axios';

import { API_BASE_URL } from 'utils/constants.util';

export const wellnub = axios.create({
  baseURL: API_BASE_URL,
});
