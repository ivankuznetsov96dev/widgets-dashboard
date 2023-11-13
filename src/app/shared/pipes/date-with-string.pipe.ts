import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";
import 'moment/locale/ru';

@Pipe({
  name: 'dateWithString',
  pure: true,
  standalone: true,
})
export class DateWithStringPipe implements PipeTransform {
  transform(value: string | Date) {
    return moment(value).format('DD MMMM YYYY');
  }
}
