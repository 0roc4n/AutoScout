import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonText, IonLabel,  IonInputPasswordToggle, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';
// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [ RouterModule, IonText, IonLabel, IonInputPasswordToggle, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {
  formData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: ''
  };
  async presentToast(message: string, position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  constructor(
        private router: Router,
        private toastController: ToastController
  ) 
  {
    
  }

  ngOnInit() {}

  onSubmit() {
    // Log form data to the console
    console.log('Form Data:', this.formData);
    this.presentToast('Please Login to your account', 'middle');
    this.router.navigate(['/login']);
  }
}

