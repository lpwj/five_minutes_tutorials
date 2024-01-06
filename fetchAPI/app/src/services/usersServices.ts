import { fetchData } from '../utils/ServiceUtilities';

export type User = {
  id: number;
  name: string;
  age: number;
  joinDate: string;
};

export const getAllUsers = async () => {
  return await fetchData<User[]>('getUsers');
};

export const getUserById = async (userId: User['id']) => {
  return await fetchData<User>('getUserById', 'GET', null, { id: userId });
};
