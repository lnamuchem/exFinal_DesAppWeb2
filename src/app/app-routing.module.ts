import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ListaCocktailComponent } from './components/lista-cocktail/lista-cocktail.component';
import { DetalleCocktailComponent } from './components/detalle-cocktail/detalle-cocktail.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'drinks/:alcohol', component: ListaCocktailComponent},
  { path: 'drink/:id', component: DetalleCocktailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
