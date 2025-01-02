import { Injectable } from '@angular/core';
import { getDatabase, ref, query, limitToLast, orderByChild, get } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class LatestcarsService {
  private readonly CARS_LIMIT = 5; // Constant limit for the number of cars

  // Method to fetch the most recent cars
  async getRecentCars(path: string) {
    const db = getDatabase();
    const carsRef = ref(db, path); // Reference to the cars collection
    const carsQuery = query(carsRef, limitToLast(this.CARS_LIMIT));

    try {
      const snapshot = await get(carsQuery);
      if (snapshot.exists()) {
        const cars = Object.values(snapshot.val() || {});
        return cars.reverse(); // Reverse the order to show newest first
      }
      return [];
    } catch (error) {
      console.error('Error fetching recent cars:', error);
      throw new Error('Error fetching recent cars: ' + error);
    }
  }
}
