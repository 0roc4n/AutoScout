import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
