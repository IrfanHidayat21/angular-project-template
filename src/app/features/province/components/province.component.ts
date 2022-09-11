import { Component, OnInit } from '@angular/core';
import { ProvinceService } from '../service/province.service';

import { Province } from '../models/province.interface';
import { QueryParam } from 'src/app/core/models/query-param/query-param.interface';
import { Validators, FormBuilder } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GlobalResponse } from 'src/app/core/models/responses/global-response';
import { UserKeycloakService } from '../../../core/services/user-keycloak/user-keycloak.service';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})
export class ProvinceComponent implements OnInit {

  provinces: Province[];
  selectedProvinces: Province[];
  provinceDialog: boolean
  submitted: boolean;
  province: Province;

  provinceForm = this.fb.group({
    id: [],
    name: ['', Validators.required],
  })
  edit: boolean;
  isAdmin: boolean;


  constructor(
    private provinceService: ProvinceService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private userKeycloakService: UserKeycloakService) { }


  ngOnInit(): void {
    this.getProvincesList({ page: '0', size: '10' })
    this.isAdmin = this.userKeycloakService.getIsAdmin();
  }


  getProvincesList(param: QueryParam): void {
    this.provinceService.getProvincesList(param).subscribe((response: GlobalResponse<Province[]>) => { this.provinces = response.data })
  }

  createProvince(province: Province): void {
    this.provinceService.postProvince(province).subscribe((response: GlobalResponse<Province>) => {
      this.provinces.push(response.data)
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: `${response.data.name} Province Created`, life: 3000 });
    })
  }

  updateProvince(province: Province): void {
    this.provinceService.updateProvince(province).subscribe((response: GlobalResponse<Province>) => {
      this.provinces[this.findIndexById(response.data.id)] = response.data;
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: `${response.data.name} Province Updated`, life: 3000 });
    })
  }

  delProvince(province: Province): void {
    this.provinceService.deleteProvince(province.id).subscribe((response: any) => {
      this.provinces = this.provinces.filter(val => val.id !== this.province.id);
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: `${this.province.name} Province Deleted`, life: 3000 });
    })
  }


  openNew(): void {
    this.submitted = false;
    this.provinceDialog = true;
    this.edit = false;
  }

  editProvince(province: Province): void {
    this.provinceForm.patchValue({
      id: province.id,
      name: province.name
    })
    this.provinceDialog = true;
    this.edit = true;
  }

  deleteProvince(province: Province) {
    this.province = province;
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ' ${province.name} ?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delProvince(province)
      }
    });
  }

  deleteSelectedProvinces(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected provinces?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedProvinces.forEach(async value => {
          await this.delProvince(value);
        })
      }
    });
  }

  hideDialog() {
    this.provinceDialog = false;
    this.submitted = false;
    this.edit = false;
  }

  saveProvince() {
    this.submitted = true;
    const dataProvice: Province = this.provinceForm.value;
    switch (this.edit && this.provinceForm.valid) {
      case true:
        const editPronvi: Province = { ...dataProvice, id: this.provinceForm.value.id }
        this.updateProvince(editPronvi)
        this.provinceDialog = false;
        break;
      default:
        this.createProvince(dataProvice)
        this.provinceDialog = false;
        break;

    }
    this.provinceForm.reset()
    this.provinces = [...this.provinces];

  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.provinces.length; i++) {
      if (this.provinces[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }


}
