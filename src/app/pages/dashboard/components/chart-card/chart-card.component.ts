import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ChartOptionInterface } from "src/app/shared/models/chart-option.model";

/**
 *ChartCardComponent
 *
 * @export
 * @class ChartCardComponent
 */
@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartCardComponent {
  //must be changed to shared component in future

  //*Props
  @Input() public data!: ChartOptionInterface;
  @Output() deleteCardEvent = new EventEmitter<string>();

  constructor() {}

  /**
   * Delete card func
   *
   * @public
   * @memberof ChartCardComponent
   */
  public deleteCard(): void {
    this.deleteCardEvent.emit(this.data.id);
  }
}
