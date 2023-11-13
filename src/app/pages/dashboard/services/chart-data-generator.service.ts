import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ChartConfigInterface } from "src/app/shared/models/chart-config.model";

@Injectable()
export class ChartDataGeneratorService {
  private _chartsList: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  public chartsList$: Observable<any> = this._chartsList.asObservable();

  constructor() {}

  public dataGenerate(config: ChartConfigInterface): void {
    console.log('FUCK!~: ', config);
  }
}
