/**
 * @description Abstraction for generating random whole number
 * @param {Number} ceiling 
 */
export const createRandomNumber = (ceiling) => {
  return Math.floor(Math.random() * ceiling);
}