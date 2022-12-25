import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { ListaCocktailComponent } from './components/lista-cocktail/lista-cocktail.component';
import { DetalleCocktailComponent } from './components/detalle-cocktail/detalle-cocktail.component';

import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { BebidasService } from './services/bebidas.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaCocktailComponent,
    DetalleCocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatListModule
  ],
  providers: [BebidasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
