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
  cars: any[] = [];
  constructor(private latestcarsService: LatestcarsService) {}

  ngOnInit() {
    this.loadRecentCars();
  }

  async loadRecentCars() {
    try {
      this.cars = await this.latestcarsService.getRecentCars('cars'); // Fetch recent cars
      console.log('Recent cars:', this.cars);
    } catch (error) {
      console.error('Error loading recent cars:', error);
    }
  }
}