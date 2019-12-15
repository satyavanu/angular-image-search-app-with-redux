import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ErrorService {
  constructor() {}

  handleError(error: Error): void {
    let err;

    console.log(error);

    // Check if error object and message property are present
    if (!error || typeof error !== 'object' || !error.message || error.message === 'null' || typeof error.message !== 'string') {
      err = new Error('Error is not properly defined');
      console.warn('The error is not properly defined', error);
      console.trace();
    } else {
      err = error;
    }
  }
}
