import { fetchData } from '../utils/ServiceUtilities';

export type User = {
  id: number;
  name: string;
  age: number;
  joinDate: string;
};

/**
 * @function getAllUsers
 * @description Returns all the users on the server.
 * @returns The list of users.
 * @async
 */
export const getAllUsers = async () => {
  return await fetchData<User[]>('getUsers');
};

/**
 * @function getUserById
 * @description Returns a given user according to the ID we send.
 * @param userId The user ID to fetch.
 * @returns The given user info.
 * @async
 */
export const getUserById = async (userId: User['id']) => {
  return await fetchData<User>('getUserById', 'GET', undefined, { id: userId });
};
