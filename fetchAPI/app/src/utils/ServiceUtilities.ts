import config from '../config.json';

type allowedMethods = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';

type SuccessResponse<D> = {
  code: 'success';
  data: D;
};

type ErrorResponse<E = Error> = {
  code: 'error';
  error: E;
};

type BaseFetchResponse<D, E> = Promise<SuccessResponse<D> | ErrorResponse<E>>;

/**
 * @function buildEndpoint
 * @description Returns the endpoint based on the configuration file settings.
 * @param endpointProperty The json file property, form the endpoints object, to get the value and use to build the url.
 * @returns
 */
const buildEndpoint = (endpointProperty: keyof typeof config.endpoints) => {
  return `${config.isSecure ? 'https' : 'http'}://${config.host}:${config.port}/${config.apiBasePathContext}/${
    config.endpoints[endpointProperty]
  }`;
};

/**
 * @function fetchData
 * @description Creates the correct url and options to call the fetch API.
 * @param endpointProperty The json file property, form the endpoints object, to get the value and use to build the url.
 * @param method The request's method.
 * @param bodyData [Optional] A JSON object to send in the request payload.
 * @param queryStringParameters [Optional] A JSON object that gets mapped into query string parameters on the URL.
 * @returns The fetch API response mapped into the type BaseFetchResponse<D, E>.
 * @async
 */
export const fetchData = async <D, E = Error>(
  endpointProperty: keyof typeof config.endpoints,
  method: allowedMethods = 'GET',
  bodyData?: Record<string, unknown>,
  queryStringParameters?: Record<string, string>
): BaseFetchResponse<D, E> => {
  // TODO: handle tokens to authenticate the request
  let fetchOptions: RequestInit = {
    headers: {
      'Content-type': 'application/json',
    },
    method,
  };
  let apiUrl = buildEndpoint(endpointProperty);

  if (method === 'POST') {
    fetchOptions.body = JSON.stringify(bodyData);
  }

  if (method === 'GET' || method === 'DELETE') {
    if (queryStringParameters && Object.keys(queryStringParameters).length) {
      const urlSearchParams = new URLSearchParams(queryStringParameters);
      apiUrl = `${apiUrl}?${urlSearchParams.toString()}`;
    }
  }

  // authentication with cookies
  if (config.useCredentials) {
    fetchOptions.credentials = 'include';
  }

  try {
    const response = await fetch(apiUrl, fetchOptions);
    if (response.ok) {
      try {
        const data = (await response.json()) as D;
        return {
          code: 'success',
          data,
        };
      } catch (error) {
        throw error;
      }
    }
  } catch (error) {
    return {
      code: 'error',
      error: error as E,
    };
  }

  return {
    code: 'error',
    error: new Error('Cannot make the service request') as E,
  };
};
