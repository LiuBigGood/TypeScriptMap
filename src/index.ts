import { User } from "./User";
import { Company } from './Company'
import { Maps } from "./Map";
let user = new User()
let company = new Company()
let map = new Maps('container')
map.addMarker(user)
map.addMarker(company)