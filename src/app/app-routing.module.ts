import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './core/components/main/app.main.component';
import { AuthGuard } from './core/guard/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'app', component: AppMainComponent,
                children: [
                    {
                        path: 'province', loadChildren: () => import('./features/province/province.module').then(m => m.ProvinceModule),
                        canActivate: [AuthGuard], data: { roles: ['admin', 'user'] }
                    },

                ]
            },

            { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
            { path: '**', redirectTo: 'login' },
        ], { useHash: false, scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
