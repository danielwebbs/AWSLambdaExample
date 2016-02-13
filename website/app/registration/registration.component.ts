import {Component} from 'angular2/core'
import {iUser} from './../interfaces/user'
import {UserService} from '../services/user.service'
@Component({
  selector: 'sign-up-page',
  template: `  <div><label>Place Holder</label></div>
      <div>
      <label>First Names:</label>
      <input [(ngModel)] = "customer.firstNames"/>
      <label>Last Name: </label>
      <input [(ngModel)] = "customer.lastName"/>
      <label> Email: </label>
      <input [(ngModel)] = "customer.email"/>
      <label>Password</label>
      <input [(ngModel)] = "customer.password"/>
      <input type = "submit" value = "Register" (click) = "createCustomer(customer)"/>
  </div>`,
  providers: [UserService]
})

export class RegistrationComponent{
  constructor(private _userService: UserService){
  }
  //Can't initialize a interface with new()
  public customer: iUser = {
    "firstNames":"",
    "lastName": "",
    "email": "",
    "password":""
  }

  createCustomer(customer: iUser) {
    this._userService.createUser(customer)
  }
  // getCustomer(): void{
  //   this.customer = this._userService.getUser()
  // }

}
