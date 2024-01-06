import { fetchData } from '../utils/ServiceUtilities';

export type Book = {
  id: number;
  title: string;
  isbn: number;
  author: string;
  publishDate: string;
};

/**
 * @function getAllBooks
 * @description Returns all the books on the server.
 * @returns The list of books.
 * @async
 */
export const getAllBooks = async () => {
  return await fetchData<Book[]>('getBooks');
};

/**
 * @function getBookById
 * @description Returns a given book according to the ID we send.
 * @param bookId The book ID to fetch.
 * @returns The given book info.
 * @async
 */
export const getBookById = async (bookId: Book['id']) => {
  return await fetchData<Book>('getBookById', 'GET', undefined, { id: bookId });
};
