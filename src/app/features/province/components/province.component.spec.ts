import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceComponent } from './province.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { ProvinceService } from '../service/province.service';
import { InputTextModule } from 'primeng/inputtext';

import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

describe('ProvinceComponent', () => {
  let component: ProvinceComponent;
  let fixture: ComponentFixture<ProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, KeycloakAngularModule, ConfirmDialogModule, ReactiveFormsModule, InputTextModule, ToastModule, ButtonModule, DialogModule, TableModule, ToolbarModule],
      providers: [ConfirmationService, MessageService, ProvinceService, KeycloakService],
      declarations: [ProvinceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
