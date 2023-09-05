import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
