import VehicleDTO from './dto/vehicle.dto'

class Vehicle implements VehicleDTO {
  id?: string
  nombre: string
  clase_vehiculo: string
  cap_carga: string
  longitud: string
  precio: string
  modelo: string
  velocidad: string
  fabricante: string
  pasajeros: string

  constructor (
    nombre: string,
    clase_vehiculo: string,
    cap_carga: string,
    longitud: string,
    precio: string,
    modelo: string,
    velocidad: string,
    fabricante: string,
    pasajeros: string,
    id?: string
  ) {
    this.id = id
    this.nombre = nombre
    this.clase_vehiculo = clase_vehiculo
    this.cap_carga = cap_carga
    this.longitud = longitud
    this.precio = precio
    this.modelo = modelo
    this.velocidad = velocidad
    this.fabricante = fabricante
    this.pasajeros = pasajeros
  }
}

export default Vehicle
