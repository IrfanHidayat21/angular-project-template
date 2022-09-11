import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlecasePipe } from './pipes/titlecase.pipe';



@NgModule({
  declarations: [TitlecasePipe],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})
export class SharedModule { }
