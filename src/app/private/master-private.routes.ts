import { Routes } from "@angular/router";
import { MasterPrivateComponent } from "./master-private.component";



export const PRIVATE_ROUTES: Routes = [

    {
        path: '', pathMatch: 'full', redirectTo: 'dashboard'
    },

    {
        path: '',
        component: MasterPrivateComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
            }
        ]

    }
]