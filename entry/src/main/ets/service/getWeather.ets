import http from '@ohos.net.http';
import { apiRes } from '../models/apiRes'

const client = http.createHttp()

export class getWeather {
  async fetch(cityCode : string) : Promise<apiRes> {
    const key : string = '2bab8151d2e7c934ef25595f10ca429e'
    const url : string = `https://restapi.amap.com/v3/weather/weatherInfo?city=${cityCode}&key=${key}&extensions=all`

    console.log(url)

    try {
      const res = await client.request(
        url,
        {
          method: http.RequestMethod.GET
        }
      )
      console.log(res.result.toString())
      return new apiRes(JSON.parse(res.result.toString()))
    } catch (err) {
      console.log(err)
      throw new Error('天气获取失败')
    }
  }
}