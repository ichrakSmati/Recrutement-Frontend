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
  NbIconModule, NbCheckboxModule, NbDatepickerModule, NbCalendarModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import {FormLayoutsComponent} from "../forms/form-layouts/form-layouts.component";
import {FormInputsComponent} from "../forms/form-inputs/form-inputs.component";
import {OffreService} from "../../services/offre.service";


@NgModule({
  imports: [
    NbDatepickerModule,
    NbCalendarModule,
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
    FormLayoutsComponent,
    FormInputsComponent,
  ],
  providers: [
    OffreService,
],
})
export class DeposerOffreModule { }
