import {Component} from 'angular2/core'
import Registration from './registration'
@Component({
  selector: 'sign-up-page',
  template: '<h1>{{title}}</h1>'
})

export class RegistrationComponent{

  registerData: Registration.Registration

}
