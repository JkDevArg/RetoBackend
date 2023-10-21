class Film {
  director: string
  episodio: number
  titulo: string
  fecha_lanzamiento: string
  id?: string

  constructor (director: string, episodio: number, titulo: string, fecha_lanzamiento: string, id?: string) {
    this.director = director
    this.episodio = episodio
    this.titulo = titulo
    this.fecha_lanzamiento = fecha_lanzamiento
    this.id = id
  }
}

  export default Film
