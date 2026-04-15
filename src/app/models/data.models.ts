export interface DrinkCard {
  id: string;
  name: string;
  image: string;
  category: string;
  isAlcoholic: boolean;
  instructions: string;
  ingredients: string[]; 
}

export interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}
