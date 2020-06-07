import dayjs from 'dayjs'

const createUnixStamp = () => {
  const now = dayjs().format("YYYY-MM-DD");
  return dayjs(now).unix();
}

export default {
  createUnixStamp
}