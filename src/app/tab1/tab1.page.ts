import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LatestcarsService } from '../services/latestcars.service';
import { IonSearchbar, IonImg, IonCol, IonRow, IonButton,IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem, IonThumbnail, IonCard } from '@ionic/angular/standalone';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [RouterModule, IonSearchbar, IonCard, IonImg, IonThumbnail, IonCol, IonRow, IonButton, IonItem, IonInput, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Tab1Page implements OnInit {
  cars: any[] = []; // Array to hold the car data

  constructor(private firebaseService: LatestcarsService) {}

  ngOnInit() {
    this.loadRecentCars();
  }

  async loadRecentCars() {
    try {
      const data = await this.firebaseService.getRecentCars('autoscout_db/cars');
      this.cars = Object.values(data).reverse(); // Convert to array and reverse for correct order
      console.log('Recent cars:', this.cars);
    } catch (error) {
      console.error('Error loading recent cars:', error);
    }
  }
}
