import { structure } from '../libs/lambda'
import { APIGatewayProxyEvent } from 'aws-lambda'
import { getSpecieService } from './specie.service'
import SpecieDTO from './dto/specie.dto'

export const getSpecies = structure(async (event: APIGatewayProxyEvent): Promise<SpecieDTO[]> => {
  const search = event.queryStringParameters?.search ?? ''
  const data = await getSpecieService(search)
  return data
})
