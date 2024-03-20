import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  fetchData() {
    return new Promise((resolve, reject) => {
      const errorCondition = false;
      
      if (errorCondition) {
        reject(new Error('Failed to fetch data'));
      } else {
        setTimeout(() => {
          resolve('Nice');
        }, 3000)
      }
    });
    }
}
