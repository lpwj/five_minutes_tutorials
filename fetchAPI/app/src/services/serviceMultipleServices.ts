import { fetchServiceApiData } from '../utils/MultipleServiceConfigUtilities';

export type Random = {
  id: number;
  title: string;
};

/**
 * @function getRandomObject
 * @description Returns a random object.
 * @returns Random object.
 * @async
 */
export const getRandomObject = async () => {
  return await fetchServiceApiData<Random>('random');
};
