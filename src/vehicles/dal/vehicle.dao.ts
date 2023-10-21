import { get } from '../../libs/request'
import VehicleDTO from '../dto/vehicle.dto'
import { vehicleMap } from '../map/vehicle.map'

export const getSearchVehicle = async (search: string = ''): Promise<VehicleDTO[]> => {
  const url = `https://swapi.dev/api/vehicles/?search=${search}`
  const { data } = await get(url)
  return data.results.map((vehicle: any) => vehicleMap(vehicle))
}
