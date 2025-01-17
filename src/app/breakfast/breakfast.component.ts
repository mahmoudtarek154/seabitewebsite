import { Component } from '@angular/core';

interface breakfastitems {

  strMeal: string;
  strMealThumb: string;
  Desc: string ;
  idMeal: string;
}

@Component({
  selector: 'app-breakfast',
  imports: [],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.css'
})
export class BreakfastComponent {
  breakfastitems :breakfastitems[]=

  [
    {
    "strMeal": "Bread omelette",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "53076"
    },
    {
    "strMeal": "Breakfast Potatoes",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/1550441882.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52965"
    },
    {
    "strMeal": "English Breakfast",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52895"
    },
    {
    "strMeal": "Fruit and Cream Cheese Breakfast Pastries",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/1543774956.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52957"
    },
    {
    "strMeal": "Full English Breakfast",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52896"
    },
    {
    "strMeal": "Home-made Mandazi",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52967"
    },
    {
    "strMeal": "Salmon Eggs Eggs Benedict",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/1550440197.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52962"
    },
    {
    "strMeal": "Smoked Haddock Kedgeree",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/1550441275.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52964"
    }
    ]


}
