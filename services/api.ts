const BASE_URL = 'http://192.168.1.116:4000';

export const ENDPOINTS = {
  //auth
  SIGNIN: BASE_URL + '/auth/signin',
  SIGNUP: BASE_URL + '/auth/signup',
  //location
  GET_LOCATION: BASE_URL + '/location',
  CREATE_LOCATION: BASE_URL + '/location/create'
};
