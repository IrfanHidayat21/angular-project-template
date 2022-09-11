import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinceRoutingModule } from './province-routing.module';
import { ProvinceComponent } from './components/province.component';

import { ProvinceService } from './service/province.service';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [ProvinceComponent],
  imports: [
    CommonModule,
    ProvinceRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    ConfirmDialogModule,
    TableModule,
    ToolbarModule
  ],
  providers: [ProvinceService, ConfirmationService, MessageService]
})
export class ProvinceModule { }
