import  faker  from 'faker'
import { DotMarker } from './Map'

export class User implements DotMarker{
   name: string
   Coordinates: {
    lat: number,
    lng: number
   }
   constructor() {
     this.name = faker.name.firstName('male')
     this.Coordinates = {
      lat: faker.address.latitude(0,0,0),
      lng: faker.address.longitude(0,0,0)
     }
   }
   contentText(){
    return '个人名称'
  }
}