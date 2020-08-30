import axios from 'axios';
import _ from 'lodash';
import {
  AuthenticationError,
  AuthorizationError,
  ClientError,
  ServerError,
  UnknownError,
} from '@bit/admin-hubble.rn-hubble-commons.services.errors';
import {
  selectAccessToken,
  selectRefreshToken,
  selectDomain,
} from '@bit/admin-hubble.rn-hubble-commons.services.session/SessionSelectors';
import {getRefreshTokenPromise, refreshTokens} from './refresh';

const insertFormData = (formData, key, value) => {
  if (_.isPlainObject(value)) {
    if (value.uri && value.type) {
      formData.append(key, value);
    } else {
      _.forEach(value, (v2, k2) => {
        insertFormData(formData, `${key}[${k2}]`, v2);
      });
    }
  } else if (_.isArray(value)) {
    _.forEach(value, (v2) => {
      insertFormData(formData, `${key}[]`, v2);
    });
  } else {
    formData.append(key, value);
  }
};

const transformFormData = (data) => {
  const form = new FormData();
  _.forEach(data, (v, k) => {
    insertFormData(form, k, v);
  });
  return form;
};

const api = (
  dispatch,
  getState,
  endPoint,
  method = 'get',
  headers = {},
  data,
) => {
  const domain = selectDomain(getState());
  const accessToken = selectAccessToken(getState());

  const defaultHeader = {'Content-Type': 'application/json'};
  const authorizationHeader = accessToken ? {Authorization: accessToken} : {};
  return axios({
    method,
    url: `https://${domain}.hubble.sg${endPoint}`,
    headers: {
      ...defaultHeader,
      ...authorizationHeader,
      ...headers,
    },
    params: method === 'get' || method === 'delete' ? data : undefined,
    data: method === 'post' || method === 'put' ? data : undefined,
    transformRequest: [
      (requestData, requestHeaders) => {
        if (requestHeaders['Content-Type'] === 'multipart/form-data') {
          return transformFormData(requestData);
        }
        return JSON.stringify(requestData);
      },
    ],
  })
    .then((response) => response.data)
    .catch((error) => {
      const {response} = error;
      if (response) {
        switch (response.status) {
          case 401: {
            if (accessToken) {
              const refreshToken = selectRefreshToken(getState());
              return refreshTokens(dispatch, domain, refreshToken).then(() =>
                api(dispatch, getState, endPoint, method, headers, data),
              );
            }
            throw new AuthenticationError(401, response.data.errors);
          }
          case 403:
            throw new AuthorizationError(403, [
              'You are not authorized to perform this action.',
            ]);
          case 404:
            throw new ServerError(404);
          default:
            if (response.status >= 400 && response.status < 500) {
              throw new ClientError(response.status, response.data.errors);
            } else if (response.status >= 500) {
              throw new ServerError(response.status);
            }
            throw new UnknownError(response.status, response.data.errors);
        }
      } else {
        throw new Error(error);
      }
    });
};

export default api;
