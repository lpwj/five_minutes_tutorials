import { getAllUsers, getUserById } from './services/usersServices';
import { getAllBooks, getBookById } from './services/booksServices';

import {
  getAllUsers as getAllUsersMultipleServices,
  getUserById as getUserByIdMultipleServices,
} from './services/multipleConnections/userServices';
import { getRandomObject } from './services/multipleConnections/randomServices';

const getDataExample = async () => {
  const booksResponse = await getAllBooks();
  if (booksResponse.code === 'success') {
    console.log('\nbooksResponse success', booksResponse.data[0]);
  }
  if (booksResponse.code === 'error') {
    console.log('\nbooksResponse error', booksResponse.error.message);
  }

  const bookByIdResponse = await getBookById(123);
  if (bookByIdResponse.code === 'success') {
    console.log('\nbookByIdResponse success', bookByIdResponse.data);
  }
  if (bookByIdResponse.code === 'error') {
    console.log('\nbookByIdResponse error', bookByIdResponse.error.message);
  }

  const allUsersResponse = await getAllUsers();
  if (allUsersResponse.code === 'success') {
    console.log('\nallUsersResponse success', allUsersResponse.data[0]);
  }
  if (allUsersResponse.code === 'error') {
    console.log('\nallUsersResponse error', allUsersResponse.error.message);
  }

  const userByIdResponse = await getUserById(321);
  if (userByIdResponse.code === 'success') {
    console.log('\nuserByIdResponse success', userByIdResponse.data);
  }
  if (userByIdResponse.code === 'error') {
    console.log('\nuserByIdResponse error', userByIdResponse.error.message);
  }
};

const getDataExampleFromMultipleServicesConfig = async () => {
  const allUsersMultipleServicesResponse = await getAllUsersMultipleServices();
  if (allUsersMultipleServicesResponse.code === 'success') {
    console.log('\nallUsersMultipleServicesResponse success', allUsersMultipleServicesResponse.data[0]);
  }
  if (allUsersMultipleServicesResponse.code === 'error') {
    console.log('\nallUsersMultipleServicesResponse error', allUsersMultipleServicesResponse.error.message);
  }

  const userByIdMultipleServicesResponse = await getUserByIdMultipleServices(666);
  if (userByIdMultipleServicesResponse.code === 'success') {
    console.log('\nuserByIdMultipleServicesResponse success', userByIdMultipleServicesResponse.data);
  }
  if (userByIdMultipleServicesResponse.code === 'error') {
    console.log('\nuserByIdMultipleServicesResponse error', userByIdMultipleServicesResponse.error.message);
  }

  const randomObjectResponse = await getRandomObject();
  if (randomObjectResponse.code === 'success') {
    console.log('\nrandomObjectResponse success', randomObjectResponse.data);
  }
  if (randomObjectResponse.code === 'error') {
    console.log('\nrandomObjectResponse error', randomObjectResponse.error.message);
  }
};

getDataExample();

getDataExampleFromMultipleServicesConfig();
