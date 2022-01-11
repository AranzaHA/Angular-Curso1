import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

heroes:string[]=['Spiderman','ironman','Hulk','Thor','hawkeye'];
heroeBorrado1:string=" "
borrarHeroe(){
  this.heroeBorrado1=this.heroes.shift()|| ' ';

}

}
