import { getSearchVehicle } from './dal/vehicle.dao'
import VehicleDTO from './dto/vehicle.dto'

export const getVehicleService = async (search = ''): Promise<VehicleDTO[]> => {
  return await getSearchVehicle(search)
}
