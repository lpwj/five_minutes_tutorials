import {
  getAllUsers as getAllUsersMultipleServices,
  getUserById as getUserByIdMultipleServices,
} from '../services/multipleConnections/userServices';

import { getRandomObject } from '../services/multipleConnections/randomServices';

import { SUCCESS_RESPONSE_CODE, ERROR_RESPONSE_CODE } from '../utils/multipleConnections/ServiceUtilities';

/**
 * @function getDataExampleFromMultipleServicesConfig
 * @description Fetches data and logs it on the console.
 */
export const getDataExampleFromMultipleServicesConfig = async () => {
  const allUsersMultipleServicesResponse = await getAllUsersMultipleServices();
  if (allUsersMultipleServicesResponse.code === SUCCESS_RESPONSE_CODE) {
    console.log('\nallUsersMultipleServicesResponse success', allUsersMultipleServicesResponse.data[0]);
  }
  if (allUsersMultipleServicesResponse.code === ERROR_RESPONSE_CODE) {
    console.log('\nallUsersMultipleServicesResponse error', allUsersMultipleServicesResponse.error.message);
  }

  const userByIdMultipleServicesResponse = await getUserByIdMultipleServices(666);
  if (userByIdMultipleServicesResponse.code === SUCCESS_RESPONSE_CODE) {
    console.log('\nuserByIdMultipleServicesResponse success', userByIdMultipleServicesResponse.data);
  }
  if (userByIdMultipleServicesResponse.code === ERROR_RESPONSE_CODE) {
    console.log('\nuserByIdMultipleServicesResponse error', userByIdMultipleServicesResponse.error.message);
  }

  const randomObjectResponse = await getRandomObject();
  if (randomObjectResponse.code === SUCCESS_RESPONSE_CODE) {
    console.log('\nrandomObjectResponse success', randomObjectResponse.data);
  }
  if (randomObjectResponse.code === ERROR_RESPONSE_CODE) {
    console.log('\nrandomObjectResponse error', randomObjectResponse.error.message);
  }
};
