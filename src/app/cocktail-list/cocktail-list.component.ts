import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent {
  public cocktails: Cocktail[] = [];

  constructor(public cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((cocktailsFromJsonFile) => {
      this.cocktails = cocktailsFromJsonFile.results;

      // → Durant l'initialisation de ton composant (ngOnInit),
      // on déclenche la méthode getCocktails() et l'on s'abonne
      //  au flux de données de l'observable avec la méthode .subscribe().
    });
  }
}
