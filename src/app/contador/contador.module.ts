import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


@NgModule({
  declarations:[
    ContadorComponent
  ],
  exports:[
    ContadorComponent// se exporta para que se pueda usar en otros lados
  ]

})
export class ContadorModule{


}
