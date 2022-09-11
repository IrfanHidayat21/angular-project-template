import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class UserKeycloakService {

  constructor(private KeycloakService: KeycloakService) { }

  getIsAdmin(): boolean {
    try {
      const roles = this.KeycloakService.getUserRoles();
      return roles.includes('admin')
    } catch (e) {
      return false
    }
  }


}
