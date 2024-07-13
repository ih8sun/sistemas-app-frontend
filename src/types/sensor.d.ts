export interface Sensor {
    id: number
    todate: Date
    usaqi: number
    co2_ppm: number
    co2_ppb: number
    humedad: number
    pm2_5: number
    pm10: number
    pm1: number
    pm100: number
    temperature: number
}

export interface SensorMayo {
    id: number
    todate: Date
    usaqi: number
    co2_ppm: number
    co2_ppb: number
    r_humidity: number
    pm2_5: number
    pm10: number
    pm1: number
    pm100: number
    temperature: number
}
