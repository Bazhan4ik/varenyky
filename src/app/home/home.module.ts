import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AddingModal } from './adding/adding.modal';
import { CartModal } from './cart/cart.modal';
import { SubmitModal } from './submit/submit.modal';
import { QnaComponent } from '../qna/qna.component';
import { QnaModule } from '../qna/qna.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        QnaModule,
    ],
    declarations: [HomePage, AddingModal, CartModal, SubmitModal]
})
export class HomePageModule { }
