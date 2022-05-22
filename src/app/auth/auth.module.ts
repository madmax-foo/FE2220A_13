import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path:'login',component:LoginComponent
    },
    {
      path:'signup', component:SignupComponent
    }
  ])
  ]

})
export class AuthModule { }
