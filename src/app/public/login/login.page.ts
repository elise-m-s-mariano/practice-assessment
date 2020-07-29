import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { AlertController, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild("loginBtn") loginBtn: IonButton;
  @ViewChild("registerBtn") registerBtn: IonButton;
  
  loginDetails = {
    email: 'your@email.com',
    password: 'abc123'
  };
  
  constructor(private authService: AuthenticationService, public alertController: AlertController) { }

  ngOnInit() {
  }

  login(form) {
    this.registerBtn.disabled = true;
    this.loginBtn.disabled = true;
    this.authService.SignIn(form.value.email, form.value.password).then((res) => {
      this.loginBtn.disabled = false;
      this.registerBtn.disabled = false;
    }).catch((error) => {
      // window.alert(error.message)
      this.presentAlert(error.message);
      this.loginBtn.disabled = false;
      this.registerBtn.disabled = false;
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
  }

}
