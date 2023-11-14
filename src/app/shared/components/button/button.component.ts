import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * Shared ButtonComponent
 *
 * @export
 * @class ButtonComponent
 */
@Component({
  selector: 'app-btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [MatButtonModule, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ButtonComponent {
  //*Props
  @Input() btnName!: string;
  @Input() type: string = 'button';
  @Input() isDisabled: boolean = false;
  @Input() tooltipViewer!: string;
  @Output() onClickEvent = new EventEmitter<void>();

  constructor() {}

  /**
   * onClick func
   *
   * @memberof ButtonComponent
   */
  public onClick(): void {
    this.onClickEvent.emit();
  }
}
