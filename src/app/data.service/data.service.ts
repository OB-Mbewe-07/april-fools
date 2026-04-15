import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { DrinkCard, Joke } from "../models/data.models";

@Injectable({
    providedIn: 'root'
})
export class GetDataService{
    private http = inject(HttpClient);
    private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'; 
    private jokeApi = 'https://official-joke-api.appspot.com/random_joke';

    getMagaritas(): Observable<DrinkCard[]> {
      return this.http.get<{ drinks: any[] }>(this.apiUrl).pipe(
        map((response) =>
          response.drinks.map((drink) => ({
            id: drink.idDrink,
            name: drink.strDrink,
            image: drink.strDrinkThumb,
            category: drink.strCategory,
            isAlcoholic: drink.strAlcoholic === 'Alcoholic',
            instructions: drink.strInstructions,
            ingredients: this.extractIngredients(drink),
          }))
        )
      );
    }

    getJoke(): Observable<Joke>{
      return this.http.get<Joke>(this.jokeApi)
    };

  private extractIngredients(drink: any): string[] {
    const ingredients: string[] = [];

    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }

    return ingredients;
  }
}