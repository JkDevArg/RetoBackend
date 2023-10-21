import { structure } from "../libs/lambda";
import { APIGatewayProxyEvent } from "aws-lambda";
import { filmMap } from "./map/films.map";
import FilmDTO from "./dto/films.dto";
import { createFilmService } from "./film.service";
import { getFilmById, getFilms } from "./dal/film.dal";

export const createFilmController = structure(
  async (event: APIGatewayProxyEvent): Promise<FilmDTO> => {
    const data = JSON.parse(event.body ?? "{}");
    const film = filmMap(data);
    const createFilm = await createFilmService(film);
    return createFilm;
  }
);

export const getFilmByIdController = structure(
  async (event: APIGatewayProxyEvent): Promise<FilmDTO> => {
    const id = event.pathParameters?.id;

    if (id == null) {
      throw new Error("El ID no puede ser vacio");
    }

    const parseID = parseInt(id);

    if (isNaN(parseID)) {
      throw new Error("El ID de la película no es un número");
    }

    const data = await getFilmById(parseID);
    return data;
  }
);

export const getFilmsController = structure(async (): Promise<FilmDTO[]> => {
  const data = await getFilms();
  return data;
});
