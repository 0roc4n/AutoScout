import { Component, OnInit, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { IonSearchbar, IonImg, IonCol, IonRow, IonButton,IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem, IonThumbnail, IonCard } from '@ionic/angular/standalone';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [ IonSearchbar, IonCard, IonImg, IonThumbnail, IonCol, IonRow, IonButton, IonItem, IonInput, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class Tab1Page implements OnInit {

  items: any[] = [];
  allItems: any[] = [];
  query!: string;
  private api = inject(ApiService);

  constructor() {}
  ngOnInit(){
    this.getItems();
  }
  getItems(){
    this.allItems = this.api.items;
    this.items = [...this.allItems]; 
  }

  async onSearchChange(event: any){
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch(){
    this.items = [];
    if(this.query.length > 0){
      this.searchItems();
    }else{
      this.items = [...this.allItems];
    }
  }
  searchItems(){
    this.items = this.api.items.filter((item) =>{
      item.name.toLowerCase().includes(this.query)
    })
  }

}
