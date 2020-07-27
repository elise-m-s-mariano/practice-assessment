import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginDetails = {
    email: 'your@email.com',
    password: 'abc123'
  };

  constructor(private authService: AuthenticationService, public alertController: AlertController) { }

  ngOnInit() {
  }

  login(form) {
    this.authService.SignIn(form.value.email, form.value.password).then((res) => {

    }).catch((error) => {
      // window.alert(error.message)
      this.presentAlert(error.message);
    })
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Login Failed!',
      message: 'Invalid email or Invalid password',
      buttons: ['OK'],
    });
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
