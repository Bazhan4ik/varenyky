import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-adding',
    templateUrl: './adding.modal.html',
    styleUrls: ['./adding.modal.scss'],
})
export class AddingModal implements OnInit {
    constructor() { }



    amount: number = 12;
    price: number = 15;
    type: string = "traditional";
    amountSelected = true;
    priceSelected = false;



    @Input() name!: string;
    @Output() leave = new EventEmitter();



    ngOnInit() { }



    submit() {
        this.leave.emit(this.amount);
    }
    close() {
        this.leave.emit();
    }
    selectStyle(style: string) {
        this.type = style;
    }
    selectAmount(amount: number, t: 1 | 2) {
        this.amount = amount;
        if (amount == 12) {
            this.price = 15;
        } else {
            this.price = amount;
        }

        if (t == 1) {
            this.amountSelected = true;
            this.priceSelected = false;
        } else {
            this.amountSelected = false;
            this.priceSelected = true;
        }
    }
}
