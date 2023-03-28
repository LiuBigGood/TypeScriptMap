import  faker  from 'faker'
import { DotMarker } from './Map'

export class Company implements DotMarker{
   name: string
   catchPhrase: string
   Coordinates: {
    lat: number,
    lng: number
   }
   constructor() {
     this.name = faker.company.companyName('1')
     this.catchPhrase = faker.company.catchPhrase()
     this.Coordinates = {
      lat: faker.address.latitude(0,0,0),
      lng: faker.address.longitude(0,0,0)
     }
   }
   contentText(){
     return '公司名称'
   }
}