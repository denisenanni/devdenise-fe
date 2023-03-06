import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }


  submitForm(data: FormData){
    return fetch('https://script.google.com/macros/s/AKfycbynlFJcSJ9Nx7qNbxj6m_TOI4rK4ucSmDaaNkGMelGXWS0a8bvbqG24ME66DGMxY8YN/exec', {method: 'POST', body: data})
  }
}
