// import DeviceInfo from 'react-native-device-info';
import { API_URL, CONFIG } from '../config';

const errorMessages = {
  'error.bad_request': 'Your request is invalid.',
  'error.un_authorized': 'Enter correct User name and Password.',
  'error.forbidden': 'The kitten requested is hidden for administrators only.',
  'error.notfound': 'The specified kitten could not be found.',
  'error.method_not_allowed': 'You tried to access a kitten with an invalid method.',
  'error.not_acceptable': 'You requested a format that isn\'t json.',
  'error.gone': 'The kitten requested has been removed from our servers.',
  'error.teapot': 'I\'m a teapot.',
  'error.too_many_requests': ' You\'re requesting too many kittens! Slow down!',
  'error.internal_server_error': 'We had a problem with our server. Try again later.',
  'error.service_unavailable': 'We\'re temporarily offline for maintenance. Please try again later.',
  'error.undefined': 'Unhandled server error',
};

const defaultError = {
  // field: 'none',
  type: 'server',
  message: errorMessages['error.undefined'],
  status: 520,
};

const noInternetError = {
  // field: 'none',
  type: 'noInternet',
  message: 'No internet connection',
  status: 400,
};

const errorParser = (response, error) => {
  const type = {
    400: 'bad_request',
    401: 'un_authorized',
    403: 'forbidden',
    404: 'notfound',
    405: 'method_not_allowed',
    406: 'not_acceptable',
    410: 'gone',
    418: 'teapot',
    429: 'too_many_requests',
    500: 'internal_server_error',
    503: 'service_unavailable',
  }
  const errors = {
    type: response.type,
    message: errorMessages[['error', type[response.status]].join('.')] || error.message,
    status: response.status,
  }
  return errors;
};

const performRequest = async (path, body, method = 'POST', token = null) => {
  // console.log('token++++++++++++', token);

  const headers = {
    // 'content-type': 'multipart/form-data',
    // 'content-type': 'application/x-www-form-urlencoded',
    'content-type': 'application/json',
    // 'content-type': 'application/json-patch+json',
  };
  if (token) {
    headers['token'] = `${token}`;
  }
  // if (userid) {
  //   headers['userid'] = `${userid}`;
  // }
  // if (PatientId) {
  //   headers['PatientId'] = `${PatientId}`;
  // }
  // console.log('headers+++++++++++++', headers);
  const fullBody = {
    method,
    headers,
    timeout: 20,
  };
  if (body) {
    fullBody.body = JSON.stringify(body);
  }

  const url = [API_URL(), path].join('/');
  // console.log('url+++++++++++++++++++', url);

  try {
    const response = await fetch(url, fullBody);
    // console.log('response++++++++++++', response);

    const responseJson = await response.json();
    // console.log('responseJson++++++++', responseJson);

    if (!response.ok) {
      const parsedError = errorParser(response, responseJson);
      return { body: null, error: response._bodyText };
    }
    return { body: responseJson, error: null };
  } catch (error) {
    if (error.message.toLowerCase() === 'network request failed') {
      return { body: null, error: noInternetError };
    }
    return { body: null, error: defaultError };
  }
};

export default performRequest;
