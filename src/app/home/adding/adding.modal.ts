import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-adding',
    templateUrl: './adding.modal.html',
    styleUrls: ['./adding.modal.scss'],
})
export class AddingModal implements OnInit {
    constructor() { }



    amount: number = 12;
    type: string = "traditional";


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
    selectAmount(amount: number) {
        this.amount = amount;
    }
}
