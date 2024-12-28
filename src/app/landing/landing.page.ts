import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from '../login/login.page';
import { Router, RouterModule } from '@angular/router';
// import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle,RouterModule, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, LoginPage]
})
export class LandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
