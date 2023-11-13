import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { ChartOptionInterface } from "src/app/shared/models/chart-option.model";

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartCardComponent {
  @Input() public data!: ChartOptionInterface;
  @Output() deleteCardEvent = new EventEmitter<string>();
  constructor() {}

  public deleteCard(): void {
    this.deleteCardEvent.emit(this.data.id);
  }
}
