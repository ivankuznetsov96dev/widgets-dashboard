import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { StatusDescriptionEnum } from 'src/app/shared/enums/status-description.enum';
import { ChartDataGeneratorService } from './services/chart-data-generator.service';
import { MatDialog } from '@angular/material/dialog';
import { ChartDialogComponent } from './components/chart-dialog/chart-dialog.component';
import { ChartConfigInterface } from 'src/app/shared/models/chart-config.model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {

  public btnStatusDescription = StatusDescriptionEnum;
  public adminRules: boolean = false;

  constructor(
    private chartDataGeneratorService: ChartDataGeneratorService,
    private dialog: MatDialog
    ) {}

  ngOnInit(): void {
  }

  public showNewChartOptionsModal(): void {
    const dialogRef = this.dialog.open(ChartDialogComponent);
    dialogRef.afterClosed().subscribe((result: ChartConfigInterface) => {
      if (result) {
        this.chartDataGeneratorService.dataGenerate(result);
      }
    });
  }

  public changeRole(): void {
    this.adminRules = !this.adminRules;
  }

}