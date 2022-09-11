
import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../../environments/environment';
export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keyCLoakUrl,
        realm: environment.keyCloakRealm,
        clientId: environment.keyCloakClientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',

      },
      loadUserProfileAtStartUp: true
    }).then(() => {
      keycloak.getToken().then(value => {
        console.log(value)
      })
      //Update the token when will last less than 3 minutes
      // keycloak.updateToken(180)
    });
}
