import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './models/cocktail.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(public http: HttpClient) {}

  // Le service contient une méthode getCocktails() qui retourne un Observable. La liste des cocktails s'affiche dans un composant nommé CocktailListComponent.
  // getCocktails(): Observable<Cocktail[]> {
  //   return this.http.get<Cocktail[]>('/src/assets/cocktails.json');
  // }
  getCocktails(): Observable<any> {
    return this.http.get<any>('assets/cocktails.json');
  }
}
