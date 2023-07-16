import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.modal.html',
    styleUrls: ['./submit.modal.scss'],
})
export class SubmitModal implements OnInit {
    constructor(
        private http: HttpClient,
    ) { }


    type: "delivery" | "pickup" = "pickup";
    address: string = "";
    city: string = "Niagra on the Lake";
    unit: string = "";
    phone: string = "";
    name: string = "";


    @Input() items!: any[];
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
    async submit() {

        if (!this.phone || this.phone.length != 14 || !this.name) {
            return;
        }

        if (this.type == "delivery") {
            if (!this.address || !this.city) {
                return;
            }

            try {
                const result: any = await firstValueFrom(
                    this.http.post("/api/orders/submit", { items: this.items, address: this.address, unit: this.unit, city: this.city, phone: this.phone, name: this.name, type: "delivery" })
                );

                if (result.success) {
                    this.leave.emit(true);
                }
            } catch (e: any) {
                console.error("ERROR =======> ", e.error.reason);
            }

        } else {
            try {
                const result: any = await firstValueFrom(
                    this.http.post("/api/orders/submit", { items: this.items, phone: this.phone, name: this.name, type: "pickup" })
                );

                if (result.success) {
                    this.leave.emit(true);
                }
            } catch (e: any) {
                console.error("ERROR =======> ", e.error.reason);
            }
        }

    }
    close() {
        this.leave.emit();
    }
}
