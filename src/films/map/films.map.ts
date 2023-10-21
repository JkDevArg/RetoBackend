import FilmDTO from '../dto/films.dto'
import Film from '../film.models'

export const filmMap = ({
  director,
  episodio,
  titulo,
  fecha_lanzamiento,
  id
}: any): FilmDTO => {
  return new Film(director, episodio, titulo, fecha_lanzamiento, id)
}
