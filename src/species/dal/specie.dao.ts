import { get } from '../../libs/request'
import SpecieDTO from '../dto/specie.dto'
import { specieMap } from '../map/specie.map'

export const getSearchSpecie = async (search: string = ''): Promise<SpecieDTO[]> => {
  const url = `https://swapi.dev/api/species/?search=${search}`
  const { data } = await get(url)
  return data.results.map((especie: any) => specieMap(especie))
}
