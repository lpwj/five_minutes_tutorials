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

const buildEndpoint = (endpointProperty: keyof typeof config.endpoints) => {
  return `${config.isSecure ? 'https' : 'http'}://${config.host}:${config.port}/${config.api_base_path}/${
    config.endpoints[endpointProperty]
  } `;
};

export const fetchData = async <D, E = Error>(
  endpointProperty: keyof typeof config.endpoints,
  method: allowedMethods = 'GET',
  bodyData: Record<string, unknown> | null = null,
  queryStringParameters: Record<string, unknown> | null = null
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
    // TODO: URL Parameters encoding (URLSearchParams) should do it
    if (queryStringParameters && Object.keys(queryStringParameters).length) {
      for (const key in queryStringParameters) {
        const element = queryStringParameters[key];
        apiUrl = `${apiUrl}/${element}`;
      }
    }
  }

  // authentication with cookies
  if (config.useCredentials) {
    fetchOptions.credentials = 'include';
  }

  try {
    const response = await fetch(apiUrl);
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
