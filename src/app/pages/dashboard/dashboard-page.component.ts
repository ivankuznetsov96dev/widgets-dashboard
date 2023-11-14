import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { StatusDescriptionEnum } from 'src/app/shared/enums/status-description.enum';
import { ChartDataGeneratorService } from './services/chart-data-generator.service';
import { MatDialog } from '@angular/material/dialog';
import { ChartDialogComponent } from './components/chart-dialog/chart-dialog.component';
import { ChartConfigInterface } from 'src/app/shared/models/chart-config.model';
import { ChartOptionInterface } from 'src/app/shared/models/chart-option.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateRangeInterface } from 'src/app/shared/models/date-range.model';

/**
 * DashboardPageComponent
 *
 * @export
 * @class DashboardPageComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  //*Props
  public btnStatusDescription = StatusDescriptionEnum;
  public adminRules: boolean = false;

  //*global datepicker fg
  public range = new FormGroup({
    startDate: new FormControl<Date | null>(null, Validators.required),
    endDate: new FormControl<Date | null>(null, Validators.required),
  });

  //*chartsList Observable
  public chartsList$: Observable<ChartOptionInterface[]> = this.chartDataGeneratorService.chartsList$;

  //*destroyer Subject
  private destroyer$: Subject<void> = new Subject<void>();

  constructor(
    private chartDataGeneratorService: ChartDataGeneratorService,
    private dialog: MatDialog,
    ) {}

  /**
   * DashboardPageComponent ngOnInit
   *
   * @memberof DashboardPageComponent
   */
  ngOnInit(): void {
    this.range.valueChanges.pipe(takeUntil(this.destroyer$)).subscribe(data => {
      if (this.range.valid) {
        this.chartDataGeneratorService.modifyDateRange(data as DateRangeInterface);
      }
    })
  }

  /**
   * Func render new chart config modal dialog
   *
   * @memberof DashboardPageComponent
   */
  public showNewChartOptionsModal(): void {
    const dialogRef = this.dialog.open(ChartDialogComponent);
    dialogRef.afterClosed().subscribe((result: ChartConfigInterface) => {
      if (result) {
        this.chartDataGeneratorService.dataGenerate(result);
      }
    });
  }

  /**
   * Func change user role
   * (need to anctivate adding new charts)
   * (#Task 2)
   *
   * @memberof DashboardPageComponent
   */
  public changeRole(): void {
    this.adminRules = !this.adminRules;
  }

  /**
   * Charts cards trackBy
   *
   * @param {number} index
   * @param {ChartOptionInterface} card
   * @return {*}  {string}
   * @memberof DashboardPageComponent
   */
  public trackByFunc(index: number, card: ChartOptionInterface): string {
    return card.id;
  }

  /**
   * Func call deleteChart from chartList
   *
   * @param {string} id
   * @memberof DashboardPageComponent
   */
  public deleteChartCard(id: string): void {
    this.chartDataGeneratorService.deleteChart(id)
  }

  /**
   * DashboardPageComponent ngOnDestroy
   *
   * @memberof DashboardPageComponent
   */
  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

}
