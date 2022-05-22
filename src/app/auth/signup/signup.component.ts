import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
isLoading = false
  constructor(private authSrv:AuthService) { }

  ngOnInit(): void {
  }
  async onsubmit(form:NgForm){
    this.isLoading = true
    console.log(form)
    try {
      await this.authSrv.signup(form.value).toPromise()
      form.reset()
      this.isLoading = false
    } catch (error) {
      console.error(error)
      this.isLoading = false
    }


  }
}
