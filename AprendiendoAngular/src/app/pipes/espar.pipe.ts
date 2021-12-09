import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'espar'
})
export class EsParPipe implements PipeTransform {

  transform(value: any){
    if(value % 2 == 0) return "El año es: " + value + " y es par"

    return "El año es: " + value + " y es inpar";
  }

}
