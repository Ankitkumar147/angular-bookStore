import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  public baseURL: String ="http://localhost:9090/user/"

  constructor( private httpClient: HttpClient) { }

  //add user

  public addUser(form:any){
    return this.httpClient.post(this.baseURL +"register", form)

  }

  public loginUser(form:{ email: any; password: any; }){
    return this.httpClient.post(this.baseURL+"loginUser",form)
  }


}
