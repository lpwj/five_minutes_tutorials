import { getAllUsers, getUserById } from './services/usersServices';
import { Book, getAllBooks, getBookById } from './services/booksServices';

const getDataExample = async () => {
  const booksResponse = await getAllBooks();
  if (booksResponse.code === 'success') {
    console.log('booksResponse success', booksResponse.data);
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
    console.log('allUsersResponse success', allUsersResponse.data);
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

getDataExample();
