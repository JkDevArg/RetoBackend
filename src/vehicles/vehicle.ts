import { structure } from '../libs/lambda'
import { APIGatewayProxyEvent } from 'aws-lambda'
import VehicleDTO from './dto/vehicle.dto'
import { getVehicleService } from './vehicle.service'

export const getVehicles = structure(async (event: APIGatewayProxyEvent): Promise<VehicleDTO[]> => {
  const search = event.queryStringParameters?.search ?? ''
  const data = await getVehicleService(search)
  return data
})
