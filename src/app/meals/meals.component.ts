import { Component } from '@angular/core';
import { NavmealsComponent } from "../navmeals/navmeals.component";
import { SeafoodComponent } from "../seafood/seafood.component";
import { PastaComponent } from "../pasta/pasta.component";
import { BreakfastComponent } from "../breakfast/breakfast.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [NavmealsComponent, SeafoodComponent, PastaComponent, BreakfastComponent ,RouterOutlet],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {

}
