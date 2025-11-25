import { forecasts } from './forecasts'

export class apiRes {
  status : number
  count : number
  info : string
  infocode : string
  forecasts : forecasts[]

  constructor(data?: any) {
    if(data) {
      this.status = Number(data.status)
      this.count = Number(data.count)
      this.info = data.info
      this.infocode = data.infocode
      this.forecasts = Array.isArray(data.forecasts)
        ? data.forecasts.map((item: any) => new forecasts(item))
        : []
    } else {
      this.status = 0
      this.count = 0
      this.info = ''
      this.infocode = ''
      this.forecasts = []
    }
  }

  toString() : string {
    let res : string = ''
    this.forecasts.forEach( (item) => {
      res += item.toString() + '\n'
    })
    return res
  }

}