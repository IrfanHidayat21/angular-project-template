import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';


import { AppCodeModule } from './core/components/code/app.code.component';
import { AppComponent } from './app.component';
import { AppMainComponent } from './core/components/main/app.main.component';
import { AppConfigComponent } from './core/components/config/app.config.component';
import { AppRightmenuComponent } from './core/components/right-menu/app.rightmenu.component';
import { AppMenuComponent } from './core/components/menu/app.menu.component';
import { AppMenuitemComponent } from './core/components/menu/app.menuitem.component';
import { AppTopBarComponent } from './core/components/topbar/app.topbar.component';
import { AppSearchComponent } from './core/components/search/app.search.component';
import { AppFooterComponent } from './core/components/footer/app.footer.component';
import { UserKeycloakService } from './core/services/user-keycloak/user-keycloak.service';


import { BreadcrumbService } from './core/services/app.breadcrumb.service';
import { MenuService } from './core/services/app.menu.service';
import { HttpConfigInterceptor } from './core/interceptors/http.config.interceptor';
import { LoadingService } from './core/services/loading.service';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './core/utils/app.init';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DropdownModule,
        InputSwitchModule,
        RadioButtonModule,
        AppCodeModule,
        ProgressBarModule,
        KeycloakAngularModule,
        ToastModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppRightmenuComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppConfigComponent,
        AppTopBarComponent,
        AppSearchComponent,
        AppFooterComponent,
    ],
    providers: [
        MenuService,
        BreadcrumbService,
        LoadingService,
        UserKeycloakService,
        MessageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpConfigInterceptor,
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: initializeKeycloak,
            multi: true,
            deps: [KeycloakService],
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
