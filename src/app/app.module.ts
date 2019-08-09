/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import {
  NbCalendarModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {FrontPageComponent} from "./front-page/front-page.component";
import {FrontPageModule} from "./front-page/front-page.module";
import {RechercheComponent} from "./front-page/recherche/recherche.component";
import {APP_BASE_HREF} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {QuizComponent} from "./pages/quiz/quiz.component";
import {QuizModule} from "./pages/quiz/quiz.module";
import {InscriptionComponent} from "./login/inscription/inscription.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FilterPipe} from "./front-page/recherche/filtre.pipe";
import {CKEditorModule} from 'ng2-ckeditor';
import { ReversePipe } from './front-page/toastmessage/reverse.pipe';
import {ToastMessagesComponent} from "./front-page/toastmessage/toastmessage.component";

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    RechercheComponent,
    LoginComponent,
    InscriptionComponent,
    FilterPipe,
    RechercheComponent,
    LoginComponent
  ],
  imports: [
    NbCalendarModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FrontPageModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    Ng2SearchPipeModule,
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
