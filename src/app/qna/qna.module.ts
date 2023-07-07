import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QnaComponent } from './qna.component';
import { IonicModule } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';



@NgModule({
    declarations: [
        QnaComponent,
        PopoverComponent,
    ],
    imports: [
        IonicModule,
        CommonModule,
    ],
    exports: [
        QnaComponent
    ]
})
export class QnaModule { }
