import { casts } from './casts'

export class forecasts {
  city : string
  adcode : string
  province : string
  reporttime : string
  casts : casts[]

  constructor(data: any) {
    this.city = data.city
    this.adcode = data.adcode
    this.province = data.province
    this.reporttime = data.reporttime

    this.casts = Array.isArray(data.casts)
      ? data.casts.map((item: any) => new casts(item))
      : []
  }

  toString() : string {
    let res : string = `${this.city} ${this.adcode}\n`
    this.casts.forEach( (item) => {
      res += item.toString() + '\n'
    })
    return res
  }
}