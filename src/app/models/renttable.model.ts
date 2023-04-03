export interface RentTableData {
    fecha: Date,
    tiempo: number,
    saldo: number,
    carro: {
        placa: string,
        marca: string
    },
    cliente: {
        cedula: string,
        nombre: string
    }
}