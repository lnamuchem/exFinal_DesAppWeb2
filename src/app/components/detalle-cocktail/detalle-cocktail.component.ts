import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntidadBebida } from 'src/app/entities/entidad-bebida';
import { EntidadBebidaResponse } from 'src/app/entities/entidad-bebida-response';
import { BebidasService } from 'src/app/services/bebidas.service';
import { EntidadIngrediente } from 'src/app/entities/entidad-ingrediente';

@Component({
  selector: 'app-detalle-cocktail',
  templateUrl: './detalle-cocktail.component.html',
  styleUrls: ['./detalle-cocktail.component.css']
})
export class DetalleCocktailComponent {
  private idDrink: string;
  bebida: EntidadBebida;
  ingredientes: EntidadIngrediente[] = [];
  ingredientesCols: string[] = ['Nombre', 'Cantidad'];

  constructor(private router: Router, private route: ActivatedRoute, private bebidaService: BebidasService) { }


  ngOnInit(): void {
    this.idDrink = this.route.snapshot.params['id'];
    this.bebidaService.buscarBebida(this.idDrink).subscribe({
      next: (response: EntidadBebidaResponse) => {
        if (response.drinks.length) {
          this.bebida = response.drinks[0];

          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient1, this.bebida.strMeasure1));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient2, this.bebida.strMeasure2));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient3, this.bebida.strMeasure3));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient4, this.bebida.strMeasure4));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient5, this.bebida.strMeasure5));

          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient6, this.bebida.strMeasure6));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient7, this.bebida.strMeasure7));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient8, this.bebida.strMeasure8));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient9, this.bebida.strMeasure9));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient10, this.bebida.strMeasure10));

          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient11, this.bebida.strMeasure11));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient12, this.bebida.strMeasure12));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient13, this.bebida.strMeasure13));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient14, this.bebida.strMeasure14));
          this.addIngrediente(new EntidadIngrediente(this.bebida.strIngredient15, this.bebida.strMeasure15));
        }
      },
      error: (error) => {
        console.log(`Error: ${error}`);
      }
    });
  }

  private addIngrediente(ingrediente: EntidadIngrediente) {
    if (ingrediente.nombre && ingrediente.medida) {
      this.ingredientes.push(ingrediente);
    }
  }

  goBack(){
    window.history.back();
  }
}
