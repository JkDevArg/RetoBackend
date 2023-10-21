import { v4 as uuid } from 'uuid'

export const generarID = (): string => {
  return uuid()
}
