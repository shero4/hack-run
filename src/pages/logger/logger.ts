import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@IonicPage()
@Component({
  selector: 'page-logger',
  templateUrl: 'logger.html',
})
export class LoggerPage {
  todos = [];
  todo: string;
  protime = [];
  acttime: any;
  constructor(
    public navCtrl: NavController,
    public afauth: AngularFireAuth,
    public afstore: AngularFirestore
    ) {
      this.afauth.auth.onAuthStateChanged(user => {
        this.afstore.collection('users').doc(user.uid).get().toPromise().then(doc => {
          if(doc.data()) {
            this.todos = doc.data().todos;
            this.protime = doc.data().protime;
            this.acttime = this.mode(this.protime);
          } else {
            console.log("no ideas")
          }
        })
      }) 
  }

  private mode(arr1: any) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr1.length; i++) {
      for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
          m++;
        if (mf < m) {
          mf = m;
          item = arr1[i];
        }
      }
      m = 0;
    }
    return item;
  }

  public add() {
    this.todos.push(this.todo);
    let date = new Date()
    this.protime.push(date.getHours());
    this.acttime = this.mode(this.protime);
    if(this.protime.length == 1) {this.acttime = this.protime[0]}
    this.todo = "";
    /*
      Just as a POC for the hack we are not counting daily records, but eventually plan to store an
      object with the respective date in it
    */
    this.afstore.collection('users').doc(this.afauth.auth.currentUser.uid).set({
      todos: this.todos,
      protime: this.protime,
      acttime: this.acttime || ''
    })
  }
}
