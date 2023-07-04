import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookRoutingModule } from './cook-routing.module';
import { CookPage } from './cook.page';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [
        CookPage
    ],
    imports: [
        CommonModule,
        CookRoutingModule,
        IonicModule
    ]
})
export class CookModule { }
