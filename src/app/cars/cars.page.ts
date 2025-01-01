import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FirebaseService } from '../services/firebase.service'; // Import FirebaseService
// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonSearchbar, IonTabs, IonTabBar, IonTabButton, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
  standalone: true,
  imports: [ IonSearchbar, IonTabs, IonTabBar, IonTabButton, IonButton, IonItem, IonInput, IonIcon, RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarsPage implements OnInit {
  cars: any = []; // Array to hold car data

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.loadCarsData();
  }

  async loadCarsData() {
    try {
      const data = await this.firebaseService.getCarsData('autoscout_db/cars');
      this.cars = Object.values(data); // Convert object to array
      console.log('Cars data:', this.cars);
    } catch (error) {
      console.error('Error loading cars data:', error);
    }
  }
  
}
