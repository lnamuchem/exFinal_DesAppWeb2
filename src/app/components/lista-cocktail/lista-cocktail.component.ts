import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntidadBebida } from 'src/app/entities/entidad-bebida';
import { EntidadBebidaResponse } from 'src/app/entities/entidad-bebida-response';
import { BebidasService } from 'src/app/services/bebidas.service';

@Component({
  selector: 'app-lista-cocktail',
  templateUrl: './lista-cocktail.component.html',
  styleUrls: ['./lista-cocktail.component.css']
})

export class ListaCocktailComponent implements OnInit {
  isAlcohol: boolean
  bebidas: EntidadBebida[];

  constructor(private router: Router, private route: ActivatedRoute, private bebidasService: BebidasService){}

  showInfo(idDrink: string): void {
    this.router.navigate([`drink/${idDrink}`]);
  }


  ngOnInit(): void {
    let alcoholParam =  this.route.snapshot.params['alcohol'];

    if(alcoholParam == 'alcoholic') this.isAlcohol = true;
    else if(alcoholParam == 'non-alcoholic') this.isAlcohol = false;
    else{
      alert("Pagina no existe");
      this.router.navigate(['/'])
    }

    if (this.isAlcohol) {
      this.bebidasService.listaBebidasAlcoholicas().subscribe({
        next: (response: EntidadBebidaResponse) => {
          console.log(response);
          
          this.bebidas = response.drinks;
        },
        error: (error) => {
          console.log(`Error: ${error}`);
        }
      });
    } else {
      this.bebidasService.listaBebidasNoAlcoholicas().subscribe({
        next: (response: EntidadBebidaResponse) => {
          this.bebidas = response.drinks;
        },
        error: (error) => {
          console.log(`Error: ${error}`);
        }
      });
    }
  }

  goBack(){
    window.history.back();
  }
  
}
