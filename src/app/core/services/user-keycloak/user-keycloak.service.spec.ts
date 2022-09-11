import { TestBed } from '@angular/core/testing';

import { UserKeycloakService } from './user-keycloak.service';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

describe('UserKeycloakService', () => {
  let service: UserKeycloakService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KeycloakAngularModule],
      providers: [KeycloakService]
    });
    service = TestBed.inject(UserKeycloakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
