import { createFilm, getFilmById, getFilms } from './dal/film.dal'
import FilmDTO from './dto/films.dto'


export const createFilmService = async (film: FilmDTO): Promise<FilmDTO> => {
  return await createFilm(film)
}

export const getFilmByIdService = async (id: number): Promise<FilmDTO> => {
  return await getFilmById(id)
}

export const getFilmsService = async (): Promise<FilmDTO[]> => {
  return await getFilms()
}
