import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // If you want to use Firebase Authentication
import { environment } from '../environments/environment';  // Firebase configuration
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    // Initialize Firebase
    const app = initializeApp(environment.firebase);

    // Initialize Firebase Authentication (Optional, if you need it)
    const auth = getAuth(app);
    console.log('Firebase initialized successfully');
    
    // You can also initialize other Firebase services here, like Firestore:
    // const db = getFirestore(app);
  }
}
