import { getSearchSpecie } from './dal/specie.dao'
import SpecieDTO from './dto/specie.dto'

export const getSpecieService = async (search = ''): Promise<SpecieDTO[]> => {
  return await getSearchSpecie(search)
}
