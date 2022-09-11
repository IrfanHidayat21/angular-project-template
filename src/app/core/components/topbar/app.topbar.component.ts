import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppMainComponent } from '../main/app.main.component';
import { BreadcrumbService } from '../../services/app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    items: MenuItem[];
    user: string;

    constructor(public breadcrumbService: BreadcrumbService,
        public app: AppMainComponent,
        private router: Router,
        private keycloakService: KeycloakService) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    ngOnInit(): void {
        this.initializeUserOptions();
    }

    private initializeUserOptions(): void {
        this.user = this.keycloakService.getUsername();
    }

    logout(): void {
        this.keycloakService.logout('http://localhost:4200');
    }
}
