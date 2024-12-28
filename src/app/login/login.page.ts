import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonInput, IonIcon, RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage {
  // Firebase Initialization
  oapp = initializeApp(environment.firebase);
  auth = getAuth(this.oapp);

  gEmail = '';
  gPassword = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  loginUser() {
    signInWithEmailAndPassword(this.auth, this.gEmail, this.gPassword)
      .then((userCredential) => {
        console.log('User logged in successfully:', userCredential.user);

        // Navigate to /tabs/tab1 on successful login
        this.router.navigate(['/tabs/tab1']);
        this.presentToast('Login successfully', 'middle');
      })
      .catch((error) => {
        console.error('Error logging in user:', error.message);

        // Show toast message
        this.presentToast('Login failed. Please try again.', 'top');

        // Navigate back to the login page on failure
        this.router.navigate(['/login']);
      });
  }
}
