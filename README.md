# Angular Project Template

Angular Project Template Based On [primeng diamond theme](https://www.primefaces.org/primeng/)  
[changelog](https://gitlab.com/ptfic/angular-project-template/-/blob/master/CHANGELOG.md)

## Requirements for development
- Docker 
- Node 
- Angular CLI
- git

## Installation



```bash
$ git clone git@gitlab.com:ptfic/angular-project-template.git
$ cd angular-project-template
$ docker-compose build
$ docker compose up -d
```
angular project will be live in [http://0.0.0.0:4200](http://0.0.0.0:4200) and every changes at file will be reloaded.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.



### Add features

Adding features are suggested inside `src/features` folder, and generated using angular/cli.
pro tip: use `--dry-run` flag at first to print file path that will be create without affecting the folders.

#### Creating feature module and component routing
```bash
$ ng g module features/<FEATURE_NAME> --routing
```


#### Creating feature component
```bash
$ ng g component features/<FEATURE_NAME>/components/<FEATURE_NAME>
```
update the `<FEATURE_NAME>-routing.module.ts` manually to import the component and custom path.

#### Creating feature model
```bash
$ ng g interface features/<FEATURE_NAME>/models/<FEATURE_NAME>
```

#### Creating feature service
```bash
$ ng g service features/<FEATURE_NAME>/services/<FEATURE_NAME>
```

#### Update `app-routing.module.ts`
```typescript
{
 path: 'province', loadChildren: () => import('./features/<FEATURE_NAME>/<FEATURE_NAME>.module').then(m => m.<FEATURE_NAME>Module),
 canActivate: [AuthGuard], data: { roles: ['admin', 'user'] }
}
```

make sure to always lazy load features modules.




## Build

### production build
configuration file `src/environment/environment.prod.ts`

```bash
$ npm run build:prod
```

### staging build
configuration file `src/environment/environment.staging.ts`

```bash
$ npm run build:staging
```

## Testing
### unit tests
```bash
$ npm run test
```
### e2e testing
```bash
$ npm run e2e
```

## Gitlab CI/CD ENVIRONMENT KEY

Only on master branch will execute CI/CD
```
DEPLOY_SERVER = <IP_SERVER>
SSH_PRIVATE_KEY = <SERVER_PRIVATE_KEY>
PROJECT_BUILD_PATH = dist/flash-template
PROJECT_SERVER_PATH = <SERVER_PATH>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
