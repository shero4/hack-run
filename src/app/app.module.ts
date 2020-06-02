import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CameraPreview } from '@ionic-native/camera-preview';
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule} from '@angular/common/http';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { ProgressBarModule } from "angular-progress-bar";
import * as environment from '../../environment'

export const firebaseConfig = environment.environment.firebase

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    ProgressBarModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],

  providers: [
    StreamingMedia,
    StatusBar,
    SplashScreen,
    CameraPreview,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})

export class AppModule { }
