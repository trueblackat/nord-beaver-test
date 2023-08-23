import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://us-central1-seven-seven-bit-inhouse-helper.cloudfunctions.net',
});

export default httpClient;
