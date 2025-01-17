import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MealsComponent } from './meals/meals.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakfastComponent } from './breakfast/breakfast.component';

export const routes: Routes = [
    {path:'home' , component: HomeComponent,title:'home' },
    {path:'about' , component: AboutComponent,title:'about' },
    {path:'meals' , component: MealsComponent,title:'meals',children:[
        {path:'seafood' , component: SeafoodComponent,title:'seafood' },
        {path:'' , component: SeafoodComponent,pathMatch:'full' },
        {path:'pasta' , component: PastaComponent,title:'pasta' },
        {path:'breakfast' , component: BreakfastComponent,title:'breakfast' },

    ] },
    {path:'team' , component: TeamComponent,title:'team' },
    {path:'contact' , component: ContactComponent,title:'contact' },
    {path:'' , component:HomeComponent ,pathMatch:'full'},
    {path:'**' , component: HomeComponent,title:'Not Found Page'},
];
