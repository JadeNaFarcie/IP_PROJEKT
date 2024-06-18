import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Poprawiona nazwa modułu
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { environment } from './environments/environments';
import { QuizMainPageComponent } from './quiz-main-page/quiz-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    QuizMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Dodanie FormsModule
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }