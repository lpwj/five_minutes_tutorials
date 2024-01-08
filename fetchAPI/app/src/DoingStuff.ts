import { getAllUsers, getUserById } from './services/usersServices';
import { getAllBooks, getBookById } from './services/booksServices';

import { SUCCESS_RESPONSE_CODE, ERROR_RESPONSE_CODE } from './utils/ServiceUtilities';

/**
 * @function getDataExample
 * @description Fetches data and logs it on the console.
 */
export const getDataExample = async () => {
  const booksResponse = await getAllBooks();
  if (booksResponse.code === SUCCESS_RESPONSE_CODE) {
    console.log('\nbooksResponse success', booksResponse.data[0]);
  }
  if (booksResponse.code === ERROR_RESPONSE_CODE) {
    console.log('\nbooksResponse error', booksResponse.error.message);
  }

  const bookByIdResponse = await getBookById(123);
  if (bookByIdResponse.code === SUCCESS_RESPONSE_CODE) {
    console.log('\nbookByIdResponse success', bookByIdResponse.data);
  }
  if (bookByIdResponse.code === ERROR_RESPONSE_CODE) {
    console.log('\nbookByIdResponse error', bookByIdResponse.error.message);
  }

  const allUsersResponse = await getAllUsers();
  if (allUsersResponse.code === SUCCESS_RESPONSE_CODE) {
    console.log('\nallUsersResponse success', allUsersResponse.data[0]);
  }
  if (allUsersResponse.code === ERROR_RESPONSE_CODE) {
    console.log('\nallUsersResponse error', allUsersResponse.error.message);
  }

  const userByIdResponse = await getUserById(321);
  if (userByIdResponse.code === SUCCESS_RESPONSE_CODE) {
    console.log('\nuserByIdResponse success', userByIdResponse.data);
  }
  if (userByIdResponse.code === ERROR_RESPONSE_CODE) {
    console.log('\nuserByIdResponse error', userByIdResponse.error.message);
  }
};
