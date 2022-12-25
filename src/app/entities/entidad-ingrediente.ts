export class EntidadIngrediente {
  nombre: string;
  medida: string;

  constructor(nombre?: string, medida?: string){
    this.nombre = nombre ?? '';
    this.medida = medida ?? '';
  }
}
