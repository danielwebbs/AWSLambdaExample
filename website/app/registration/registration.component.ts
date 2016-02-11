import {Component} from 'angular2/core'
import User from './../interfaces/user'
@Component({
  selector: 'sign-up-page',
  template: `  <div><label>{{message}}</label></div>
      <div>
      <label>First Names:</label>
      <input [(ngModel)] = "customer.firstNames"/>
      <label>Last Name: </label>
      <input [(ngModel)] = "customer.lastName"/>
      <label>Email: </label>
      <input [(ngModel)] = "customer.email"/>
      <label>Password: </label>
      <input [(ngModel)] = "customer.password"/>
      <input type ="button" value="Submit" (click)= "updateMessage()"/>
  </div>
`
})

export class RegistrationComponent{
  message:string
  constructor(){
    this.message = "Not submitted"
  }
public customer: User.User

updateMessage(){
  this.message = "Submitted, Thank You!"
} 

}
