import axios from 'axios'

export const get = async <T> (url: string): Promise<T> => {
  return await axios.get(url)
}
