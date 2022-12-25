import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EntidadBebidaResponse } from '../entities/entidad-bebida-response';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {
  private base_url : string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) { }

  listaBebidasAlcoholicas(){
    return this.http.get<EntidadBebidaResponse>(`${this.base_url}filter.php?a=Alcoholic`);
  }

  listaBebidasNoAlcoholicas() {
    return this.http.get<EntidadBebidaResponse>(`${this.base_url}filter.php?a=Non_Alcoholic`);
  }

  buscarBebida(idDrink: string) {
    return this.http.get<EntidadBebidaResponse>(`${this.base_url}lookup.php?i=${idDrink}`);
  }
}


//https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
//https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
