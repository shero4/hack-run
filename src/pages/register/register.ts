import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'Firebase/app';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email: string;
  password: string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
     public menu: MenuController, 
     public afAuth: AngularFireAuth,
     public toastController: ToastController
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  ionViewDidEnter() {

    this.menu.enable(false);
  }

  ionViewWillLeave() {

    this.menu.enable(true);
  }
  async register() {
    const { email, password } = this
    if(email && password) {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user)=>{
        this.navCtrl.setRoot('HomePage');
      }).catch(async err =>{
        const toast = await this.toastController.create({
          message: err.code,
          duration: 2000,
        });
        toast.present();
      });
    } else {
      const toast = await this.toastController.create({
        message: 'Enter Credentials',
        duration: 2000,
      });
      toast.present();
    }
  }
}
