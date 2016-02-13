import {Injectable} from 'angular2/core'
import {MOCKUSERS} from '../mock-data/mock-users'
import {iUser} from '../interfaces/user'

@Injectable()
export class UserService {
    getUser(): iUser {
      return MOCKUSERS[0]
    }

    createUser(user: iUser): boolean {
      //Add API call here
      if(user){
        return true
      }
      return false
    }
}
