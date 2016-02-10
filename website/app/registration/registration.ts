import registrationInterface from "./../interfaces/registrationInterface"

export class Registration implements registrationInterface.iRegistration {
  firstNames: string
  lastName: string
  email: string
  password: string
}
