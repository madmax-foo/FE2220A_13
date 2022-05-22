import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login/login.component';

export interface SignupData{
  name:string
  surname:string
  email:string
  password:string
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data:{mail:string,password:string}){
    this.http.post('http://localhost:4201/users',data)
  }

  signup(data:SignupData){
    return this.http.post('http://localhost:4201/users',data)

  }

}
