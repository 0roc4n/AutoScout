import { Component } from '@angular/core';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonSearchbar, IonImg, IonCol, IonRow, IonButton,IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonItem, IonThumbnail, IonCard } from '@ionic/angular/standalone';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
   imports: [ IonSearchbar, IonCard, IonImg, IonThumbnail, IonCol, IonRow, IonButton, IonItem, IonInput, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class Tab2Page {

  constructor() {}

}
