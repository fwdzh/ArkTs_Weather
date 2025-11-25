export class casts {
  date: string
  week: number
  dayweather: string
  nightweather: string
  daytemp: number
  nighttemp: number
  daywind: string
  nightwind: string
  daypower: string
  nightpower: string
  daytemp_float: string
  nighttemp_float: string

  constructor(data: any) {
    this.date = data.date
    this.week = Number(data.week)
    this.dayweather = data.dayweather
    this.nightweather = data.nightweather
    this.daytemp = Number(data.daytemp)
    this.nighttemp = Number(data.nighttemp)
    this.daywind = data.daywind
    this.nightwind = data.nightwind
    this.daypower = data.daypower
    this.nightpower = data.nightpower
    this.daytemp_float = data.daytemp_float
    this.nighttemp_float = data.nighttemp_float
  }

  toString() : string {
    let res : string = `${this.date}\n`
                      + `白天：${this.daytemp_float} °C\n`
                      + `夜晚：${this.nighttemp_float} °C`
    return res
  }
}