import { getWeather } from '../service/getWeather'
import { apiRes } from '../models/apiRes'

@Entry
@Component
struct Index {
  @State getInfo : getWeather = new getWeather()
  @State res : apiRes = new apiRes()
  async aboutToAppear(): Promise<void> {
    try {
      this.res = await this.getInfo.fetch('420300')
    } catch (err) {
      console.log(err)
      this.res = new apiRes({ info: '获取天气失败' })
    }
  }

  build() {
    Column(){
      Text(this.res.toString())
        .fontSize(30)
    }
    .height('100%')
    .width('100%')
  }
}