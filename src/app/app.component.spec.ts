import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './core/components/main/app.main.component';
import { AppConfigComponent } from './core/components/config/app.config.component';
import { AppTopBarComponent } from './core/components/topbar/app.topbar.component';
import { AppFooterComponent } from './core/components/footer/app.footer.component';
import { AppMenuComponent } from './core/components/menu/app.menu.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, RouterTestingModule, ToastModule],
            providers: [MessageService],
            declarations: [
                AppComponent,
                AppMainComponent,
                AppConfigComponent,
                AppTopBarComponent,
                AppMenuComponent,
                AppFooterComponent,
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
