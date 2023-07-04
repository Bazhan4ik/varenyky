import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.modal.html',
    styleUrls: ['./submit.modal.scss'],
})
export class SubmitModal implements OnInit {
    constructor() { }


    type: "delivery" | "pickup" = "pickup";
    address: string = "";
    city: string = "Niagra on the Lake";
    unit: string = "";
    phone: string = "";
    name: string = "";


    @Output() leave = new EventEmitter();



    ngOnInit() { };



    onPhoneInput(event: Event) {
        const input = event.target as HTMLInputElement;
        const value = input.value;

        const key = (event as any).data;

        if (key == " ") {
            input.value = value.slice(0, value.length - 1);
            return;
        }

        if (!key) { // backspace
            if (value.length == 1) {
                input.value = value;
                return;
            } else if (value.length == 5) {
                input.value = value.slice(0, value.length - 2);
                return;
            } else if (value.length == 10) {
                input.value = value.slice(0, value.length - 2);
                return;
            }
            return;
        }

        if (isNaN(+key)) { // not a number
            input.value = value.slice(0, value.length - 1);
            return;
        }

        if (value.length == 1) {
            input.value = "(" + value;
        }

        if (value.length == 4) {
            input.value = value + ")-";
        }

        if (value.length == 5) {
            input.value = value.slice(0, value.length - 1) + ")-" + key;
        }

        if (value.length == 9) {
            input.value = value + "-";
        }

        if (value.length == 10) {
            input.value = value.slice(0, value.length - 1) + "-" + key;
        }

        if (value.length > 14) {
            input.value = value.slice(0, 14);
            this.phone = value.slice(0, 14);
        }
    }
    submit() {
        console.log(this.phone, this.type, this.city, this.unit, this.address);
    }
    close() {
        this.leave.emit();
    }
}
