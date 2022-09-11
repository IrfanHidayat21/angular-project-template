import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from '../main/app.main.component';


@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Master',
                icon: 'pi pi-desktop',
                items: [
                    { label: 'Data Provinsi', icon: 'pi pi-fw pi-th-large', routerLink: ['/app/province'] },
                ]
            },
            { separator: true }
        ];
    }

    onMenuClick(event) {
        this.app.onMenuClick(event);
    }
}
