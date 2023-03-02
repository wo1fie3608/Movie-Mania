import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManiDataService {
  constructor(private http:HttpClient) { }
  users(data:string){ // return search by text 
    return this.http.get('https://www.omdbapi.com/?s='+data+'&apikey=b01dfa6f')
  }
  users1(data:string){ // return search by index
    return this.http.get('https://www.omdbapi.com/?i='+data+'&apikey=b01dfa6f');
  }
}
