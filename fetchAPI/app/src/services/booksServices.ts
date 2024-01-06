import { fetchData } from '../utils/ServiceUtilities';

export type Book = {
  id: number;
  title: string;
  isbn: number;
  author: string;
  publishDate: string;
};

export const getAllBooks = async () => {
  return await fetchData<Book[]>('getBooks');
};

export const getBookById = async (bookId: Book['id']) => {
  return await fetchData<Book>('getBookById', 'GET', null, { id: bookId });
};
