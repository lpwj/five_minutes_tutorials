import { getAllUsers, getUserById } from './services/usersServices';
import { getAllBooks, getBookById } from './services/booksServices';

import {
  getAllUsers as getAllUsersMultipleServices,
  getUserById as getUserByIdMultipleServices,
} from './services/databaseMultipleServices';
import { getRandomObject } from './services/serviceMultipleServices';

const getDataExample = async () => {
  const booksResponse = await getAllBooks();
  if (booksResponse.code === 'success') {
    console.log('booksResponse success', booksResponse.data[0]);
  }
  if (booksResponse.code === 'error') {
    console.log('booksResponse error', booksResponse.error.message);
  }

  const bookByIdResponse = await getBookById(123);
  if (bookByIdResponse.code === 'success') {
    console.log('bookByIdResponse success', bookByIdResponse.data);
  }
  if (bookByIdResponse.code === 'error') {
    console.log('bookByIdResponse error', bookByIdResponse.error.message);
  }

  const allUsersResponse = await getAllUsers();
  if (allUsersResponse.code === 'success') {
    console.log('allUsersResponse success', allUsersResponse.data[0]);
  }
  if (allUsersResponse.code === 'error') {
    console.log('allUsersResponse error', allUsersResponse.error.message);
  }

  const userByIdResponse = await getUserById(321);
  if (userByIdResponse.code === 'success') {
    console.log('userByIdResponse success', userByIdResponse.data);
  }
  if (userByIdResponse.code === 'error') {
    console.log('userByIdResponse error', userByIdResponse.error.message);
  }
};

const getDataExampleFromMultipleServicesConfig = async () => {
  const allUsersMultipleServicesResponse = await getAllUsersMultipleServices();
  if (allUsersMultipleServicesResponse.code === 'success') {
    console.log('allUsersMultipleServicesResponse success', allUsersMultipleServicesResponse.data[0]);
  }
  if (allUsersMultipleServicesResponse.code === 'error') {
    console.log('allUsersMultipleServicesResponse error', allUsersMultipleServicesResponse.error.message);
  }

  const userByIdMultipleServicesResponse = await getUserByIdMultipleServices(666);
  if (userByIdMultipleServicesResponse.code === 'success') {
    console.log('userByIdMultipleServicesResponse success', userByIdMultipleServicesResponse.data);
  }
  if (userByIdMultipleServicesResponse.code === 'error') {
    console.log('userByIdMultipleServicesResponse error', userByIdMultipleServicesResponse.error.message);
  }

  const randomObjectResponse = await getRandomObject();
  if (randomObjectResponse.code === 'success') {
    console.log('randomObjectResponse success', randomObjectResponse.data);
  }
  if (randomObjectResponse.code === 'error') {
    console.log('randomObjectResponse error', randomObjectResponse.error.message);
  }
};

// getDataExample();

getDataExampleFromMultipleServicesConfig();
