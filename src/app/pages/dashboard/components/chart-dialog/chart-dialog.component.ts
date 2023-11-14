import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';

/**
 *Chart configuration dialog component
 *
 * @export
 * @class ChartDialogComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls: ['./chart-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChartDialogComponent implements OnInit {

  //*Props
  public form!: FormGroup;

  /**
   *selectedSensors setter
   * @param value piced colors
   * @memberof ChartDialogComponent
   */
  set selectedSensors(value: string[]) {
    if (value) {
      this.form.removeControl('colors');
      this.form.addControl('colors', this.fb.control(Array(value.length).fill(null)));
    }
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChartDialogComponent>,
    ) {}

  /**
   *ChartDialogComponent ngOnInit
   *
   * @memberof ChartDialogComponent
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      sensors: [null, [Validators.required]],
      chartType: [null, [Validators.required]],
      startDate: [moment().toDate(), [Validators.required]],
      endDate: [moment().toDate(), [Validators.required]],
    });
  }

  /**
   * Send form data to parent
   *
   * @public
   * @memberof ChartDialogComponent
   */
  public onSetChartData(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
