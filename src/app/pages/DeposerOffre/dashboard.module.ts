import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule, NbCheckboxModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import {FormLayoutsComponent} from "../forms/form-layouts/form-layouts.component";
import {FormInputsComponent} from "../forms/form-inputs/form-inputs.component";
import {OffreService} from "../../services/offre.service";


@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    NbCheckboxModule,
  ],
  declarations: [
    DashboardComponent,
    FormLayoutsComponent,
  FormInputsComponent,
  ],
  providers: [
    OffreService,
],
})
export class DashboardModule { }
