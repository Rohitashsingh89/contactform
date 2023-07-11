import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AngularFireModule } from '@angular/fire/compat'; 
// import { FirestoreModule } from '@angular/fire/firestore';
 

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ContactFormComponent } from './contact-form/contact-form.component';

// const firebaseConfig = {
//   apiKey: "AIzaSyA4eTZ-yGEueO8mCcikULXR-IQEiu73K1M",
//   authDomain: "superstack-85719.firebaseapp.com",
//   projectId: "superstack-85719",
//   storageBucket: "superstack-85719.appspot.com",
//   messagingSenderId: "373608190954",
//   appId: "1:373608190954:web:f32040073c79abbfe09893",
//   measurementId: "G-YCEP86N7K7"
// };

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // FirestoreModule,
    // AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
