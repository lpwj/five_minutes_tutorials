import config from '../../configMultiple.json';

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
 * @param isSecure Builds the start of the endpoint path based on the given parameters.
 * @param host The host name.
 * @param port The port number.
 * @param apiContext The api path context.
 * @returns The base url path to use.
 */
const buildEndpoint = (isSecure: boolean, host: string, port: number, apiContext: string) => {
  return `${isSecure ? 'https' : 'http'}://${host}:${port}/${apiContext}`;
};

/**
 * @function buildEndpointDatabaseApi
 * @description Returns the endpoint based on the configuration file settings for the database API.
 * @param endpointProperty The json file property, form the endpoints object, to get the value and use to build the url.
 * @returns
 */
const buildEndpointDatabaseApi = (endpointProperty: keyof typeof config.endpoints) => {
  return `${buildEndpoint(config.isSecure, config.host, config.databaseApiPort, config.databaseApiBasePathContext)}/${
    config.endpoints[endpointProperty]
  }`;
};

/**
 * @function buildEndpointServicesApi
 * @description Returns the endpoint based on the configuration file settings for the Service API.
 * @param endpointProperty The json file property, form the endpoints object, to get the value and use to build the url.
 * @returns
 */
const buildEndpointServicesApi = (endpointProperty: keyof typeof config.endpoints) => {
  return `${buildEndpoint(config.isSecure, config.host, config.serviceApiPort, config.serviceApiBasePathContext)}/${
    config.endpoints[endpointProperty]
  }`;
};

/**
 * @function fetchData
 * @description Creates the correct url and options to call the fetch API.
 * @param buildEndpointCallback The function to execute so we can get the endpoint url to call.
 * @param endpointProperty The json file property, form the endpoints object, to get the value and use to build the url.
 * @param method The request's method.
 * @param bodyData [Optional] A JSON object to send in the request payload.
 * @param queryStringParameters [Optional] A JSON object that gets mapped into query string parameters on the URL.
 * @returns The fetch API response mapped into the type BaseFetchResponse<D, E>.
 * @async
 */
const fetchData = async <D, E = Error>(
  buildEndpointCallback: (endpointProperty: keyof typeof config.endpoints) => string,
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
  let apiUrl = buildEndpointCallback(endpointProperty);

  if (method === 'POST') {
    fetchOptions.body = JSON.stringify(bodyData);
  }

  if (method === 'GET' || method === 'DELETE') {
    if (queryStringParameters && Object.keys(queryStringParameters).length) {
      const urlSearchParams = new URLSearchParams(queryStringParameters);
      console.log(urlSearchParams.toString());
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

/**
 * @function fetchDatabaseApiData
 * @description Creates the correct url and options to call the fetch API for the database API.
 * @param endpointProperty The json file property, form the endpoints object, to get the value and use to build the url.
 * @param method The request's method.
 * @param bodyData [Optional] A JSON object to send in the request payload.
 * @param queryStringParameters [Optional] A JSON object that gets mapped into query string parameters on the URL.
 * @returns The fetch API response mapped into the type BaseFetchResponse<D, E>.
 * @async
 */
export const fetchDatabaseApiData = async <D, E = Error>(
  endpointProperty: keyof typeof config.endpoints,
  method: allowedMethods = 'GET',
  bodyData?: Record<string, unknown>,
  queryStringParameters?: Record<string, string>
): BaseFetchResponse<D, E> => {
  return await fetchData(buildEndpointDatabaseApi, endpointProperty, method, bodyData, queryStringParameters);
};

/**
 * @function fetchServiceApiData
 * @description Creates the correct url and options to call the fetch API for the service API.
 * @param endpointProperty The json file property, form the endpoints object, to get the value and use to build the url.
 * @param method The request's method.
 * @param bodyData [Optional] A JSON object to send in the request payload.
 * @param queryStringParameters [Optional] A JSON object that gets mapped into query string parameters on the URL.
 * @returns The fetch API response mapped into the type BaseFetchResponse<D, E>.
 * @async
 */
export const fetchServiceApiData = async <D, E = Error>(
  endpointProperty: keyof typeof config.endpoints,
  method: allowedMethods = 'GET',
  bodyData?: Record<string, unknown>,
  queryStringParameters?: Record<string, string>
): BaseFetchResponse<D, E> => {
  return await fetchData(buildEndpointServicesApi, endpointProperty, method, bodyData, queryStringParameters);
};
