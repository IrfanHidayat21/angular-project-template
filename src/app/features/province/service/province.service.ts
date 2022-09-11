import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { QueryParam } from '../../../core/models/query-param/query-param.interface';
import { Province } from '../models/province.interface';
import { GlobalResponse } from 'src/app/core/models/responses/global-response';


@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  apiUrl: string = environment.baseApiUrl;
  provinceUrl: string = 'provinces';

  constructor(private http: HttpClient) { }

  getProvincesList(params: QueryParam): Observable<GlobalResponse<Province[]>> {
    const parameters = new HttpParams();
    parameters.set('page', params.size)
    parameters.set('size', params.size)
    return this.http.get<GlobalResponse<Province[]>>(`${this.apiUrl}/${this.provinceUrl}`, { params: parameters })
  }

  postProvince(province: Province): Observable<GlobalResponse<Province>> {
    return this.http.post<GlobalResponse<Province>>(`${this.apiUrl}/${this.provinceUrl}`, province)
  }

  updateProvince(province: Province): Observable<GlobalResponse<Province>> {
    return this.http.put<GlobalResponse<Province>>(`${this.apiUrl}/${this.provinceUrl}/${province.id}`, province)
  }

  deleteProvince(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${this.provinceUrl}/${id}`)
  }
}
