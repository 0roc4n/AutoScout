import { Injectable } from '@angular/core';
import { getDatabase, ref, onValue } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private db = getDatabase();

  getCarsData(path: string) {
    const dbRef = ref(this.db, path);
    return new Promise<any>((resolve, reject) => {
      onValue(
        dbRef,
        (snapshot) => {
          const data = snapshot.val();
          resolve(data);
        },
        (error) => reject(error)
      );
    });
  }
}
