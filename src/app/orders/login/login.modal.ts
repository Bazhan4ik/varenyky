import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.modal.html',
    styleUrls: ['./login.modal.scss'],
})
export class LoginModal implements OnInit {
    constructor(
        private http: HttpClient
    ) { }

    password: string = "";
    errorMessage!: string;


    @Output() leave = new EventEmitter();


    ngOnInit() { }




    async login() {
        try {
            const result = await firstValueFrom(
                this.http.post<{ token: string; }>("/api/orders/login", { password: this.password })
            );

            if (result && result.token) {
                this.leave.emit(result.token);
            }
        } catch (e: any) {
            this.errorMessage = e.error.reason;
        }
    }
}
