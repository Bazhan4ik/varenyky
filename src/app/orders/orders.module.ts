import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './orders-routing.module';
import { OrdersPage } from './orders.page';
import { FormsModule } from '@angular/forms';
import { LoginModal } from './login/login.modal';


@NgModule({
    declarations: [
        OrdersPage,
        LoginModal,
    ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        FormsModule,
    ]
})
export class OrderModule { }
