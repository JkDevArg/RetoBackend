import VehicleDTO from '../dto/vehicle.dto'
import Vehicle from '../vehicle.models'

export const vehicleMap = ({
  name,
  vehicle_class ,
  cargo_capacity,
  length,
  cost_in_credits,
  model,
  max_atmosphering_speed,
  manufacturer,
  passengers
}: any): VehicleDTO => {
  const specie = new Vehicle(
    name,
    vehicle_class ,
    cargo_capacity,
    length,
    cost_in_credits,
    model,
    max_atmosphering_speed,
    manufacturer,
    passengers
  )
  return specie
}
