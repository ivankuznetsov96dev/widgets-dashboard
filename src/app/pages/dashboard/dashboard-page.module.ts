import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';


import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { ChartDirective } from './directives/chart/chart.directive';
import { ChartDataGeneratorService } from './services/chart-data-generator.service';

import { MatCardModule } from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ChartDialogComponent } from './components/chart-dialog/chart-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ColorPickerModule } from 'ngx-color-picker';
import { CommonModule } from '@angular/common';
import { DateWithStringPipe } from 'src/app/shared/pipes/date-with-string.pipe';
import { ChartCardComponent } from './components/chart-card/chart-card.component';

/**
 * DashboardPageModule
 *
 * @export
 * @class DashboardPageModule
 */
@NgModule({
  imports: [
    DashboardPageRoutingModule,
    ButtonComponent,
    DateWithStringPipe,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ColorPickerModule,
    CommonModule,
  ],
  declarations: [DashboardPageComponent, ChartDirective, ChartDialogComponent, ChartCardComponent],
  providers: [ChartDataGeneratorService]
})

export class DashboardPageModule {}
