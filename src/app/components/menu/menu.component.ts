import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) { }
  goToAlcoholicDrink() {
    this.router.navigate(['drinks/alcoholic']);
  }

  goToNoAlcoholicDrink() {
    this.router.navigate(['drinks/non-alcoholic']);
  }
}
