import { EnvironmentInterface } from "./environment.interface";

export const environment: EnvironmentInterface = {
  production: true,
  baseApiUrl: 'https://template.api.monev.co/api',
  keyCLoakUrl: 'https://auth.monev.co/auth',
  keyCloakRealm: 'project-template',
  keyCloakClientId: 'project-template-angular'
};
