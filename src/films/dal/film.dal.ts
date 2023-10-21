import { generarID } from '../../libs/generarID'
import database from '../../config/database'
import { filmMap } from '../map/films.map'
import FilmDTO from '../dto/films.dto'

const tableName = process.env.FILMS_TABLE ?? ''

export const getFilms = async (): Promise<FilmDTO[]> => {
  const params = {
    TableName: tableName
  }
  const { Items } = await database.scan(params).promise()
  return Items?.map((item: any) => filmMap(item)) ?? []
}

export const getFilmById = async (id: number): Promise<FilmDTO> => {
  const params = {
    TableName: tableName,
    Key: {
      id
    }
  }
  const { Item } = await database.get(params).promise()
  return filmMap(Item)
}

export const createFilm = async (
  film: FilmDTO
): Promise<FilmDTO> => {
  const id = generarID()
  film.id = id
  await database
    .put({
      TableName: tableName,
      Item: film
    })
    .promise()
  return film
}
