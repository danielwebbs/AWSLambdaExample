import {Component} from 'angular2/core';
import {RegistrationComponent} from './registration/registration.component'
import {UserService} from './services/user.service'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router'


@Component({
  selector: 'doge-app',
  template: `<h1>My Doge App</h1>
              <a [routerLink] = "['Registration']">Registration</a>
              <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    UserService
  ]
})

@RouteConfig([
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationComponent
  }
])


export class AppComponent {}
