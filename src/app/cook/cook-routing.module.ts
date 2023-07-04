import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookPage } from './cook.page';

const routes: Routes = [
    {
        path: "",
        component: CookPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CookRoutingModule { }
