import SpecieDTO from '../dto/specie.dto'
import Specie from '../specie.models'

export const specieMap = ({
  name,
  classification,
  designation,
  average_height,
  skin_colors,
  hair_colors,
  eye_colors,
  average_lifespan,
  language
}: any): SpecieDTO => {
  const specie = new Specie(
    name,
    classification,
    designation,
    +average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    +average_lifespan,
    language
  )
  return specie
}
