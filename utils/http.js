import axios from 'axios';

const serverUrl = 'https://divine-cortex-277508.ue.r.appspot.com';

export const http = axios.create({
  baseURL: serverUrl,
});