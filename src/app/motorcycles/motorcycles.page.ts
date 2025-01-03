import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonSearchbar, IonTabs, IonTabBar, IonTabButton, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-motorcycles',
  templateUrl: './motorcycles.page.html',
  styleUrls: ['./motorcycles.page.scss'],
  standalone: true,
  imports: [ IonSearchbar, IonTabs, IonTabBar, IonTabButton, IonButton, IonItem, IonInput, IonIcon, RouterModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class MotorcyclesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
