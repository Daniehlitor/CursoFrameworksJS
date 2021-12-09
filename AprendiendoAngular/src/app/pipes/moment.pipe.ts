import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: string, type: string){
    var localDate = moment(value, "", "es", undefined);
    if (type == "amTimeAgo") return localDate.fromNow();
    return localDate.local();
  }
}
