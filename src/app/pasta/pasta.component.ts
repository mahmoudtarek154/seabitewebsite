import { Component } from '@angular/core';
interface pastaitems {

  strMeal: string;
  strMealThumb: string;
  Desc: string ;
  idMeal: string;
}

@Component({
  selector: 'app-pasta',
  imports: [],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {
  pastaitems :pastaitems[] = [
    {
    "strMeal": "Chilli prawn linguine",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52839"
    },
    {
    "strMeal": "Fettuccine Alfredo",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "53064"
    },
    {
    "strMeal": "Fettucine alfredo",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52835"
    },
    {
    "strMeal": "Grilled Mac and Cheese Sandwich",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52829"
    },
    {
    "strMeal": "Lasagna Sandwiches",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52987"
    },
    {
    "strMeal": "Lasagne",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52844"
    },
    {
    "strMeal": "Pilchard puttanesca",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52837"
    },
    {
    "strMeal": "Spaghetti alla Carbonara",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52982"
    },
    {
    "strMeal": "Venetian Duck Ragu",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg",
    "Desc" : "Some quick example text to build on the card title and make up the bulk of the card's content."
,
    "idMeal": "52838"
    }
    ]


}
