import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
axios.defaults.baseURL = 'http://192.168.1.116:4000';
const onRequest = (config: any): AxiosRequestConfig => {
  const token = 'token';
  config.headers!.Authorization = 'Bearer ' + 'ABCD';
  return config;
};
const onRequestError = (err: AxiosError): Promise<AxiosError> => {
  return Promise.reject(err);
};
axios.interceptors.request.use(onRequest, onRequestError);

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};
const onResponseError = (err: AxiosError): Promise<AxiosError> => {
  return Promise.reject(err);
};
axios.interceptors.response.use(onResponse, onResponseError);
