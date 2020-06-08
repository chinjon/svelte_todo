import dayjs from 'dayjs'

/**
 * @description function creates unix timestamp based 
 * @returns {String} returns unix second 
 */
const createUnixStamp = () => {
  const now = dayjs().format("YYYY-MM-DD");
  return dayjs(now).unix();
}

export default {
  createUnixStamp
}