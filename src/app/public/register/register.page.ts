import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerDetails = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  register(form) {
    this.authService.RegisterUser(form.value.email, form.value.password)
      .then((res) => {
        // Do something here
        // this.authService.SendVerificationMail()
        // this.router.navigate(['verify-email']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
