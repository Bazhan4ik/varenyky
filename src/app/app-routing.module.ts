import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: "orders",
        loadChildren: () => import("./orders/orders.module").then(m => m.OrderModule),
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: ""
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
