import performRequest from '../services/networkProvider';

export function SignupApi(data) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      performRequest(`auth/login`, data, 'POST', token)
        .then(response => {
          if (response) {
            dispatch({
              type: SentOtp,
              subtype: 'success',
              userCredentials: response.data,
            });
          }
          resolve(response);
        })
        .catch(error => {
          dispatch({
            type: SentOtp,
            error,
          });
          reject(error);
        });
    });
  };
}