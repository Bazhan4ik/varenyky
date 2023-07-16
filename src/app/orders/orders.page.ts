import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginModal } from './login/login.modal';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-order',
    templateUrl: './orders.page.html',
    styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit, AfterViewInit {
    constructor(
        private cookieService: CookieService,
        private http: HttpClient,
    ) { };


    orders!: {
        type: "pickup" | "delivery";
        phone: string;
        name: string;
        address?: {
            address: string;
            city: string;
            unit: string;
        };
        total: number;
        _id: string;
        date: string;
        items: { name: string; amount: number; }[];
    }[];



    @ViewChild("modalContainer", { read: ViewContainerRef }) modalContainer!: ViewContainerRef;




    ngOnInit() { }
    ngAfterViewInit(): void {
        const token = this.cookieService.get('token');


        if (!token) {
            this.login();
            return;
        }

        this.loadOrders();
    }



    async setStatus(status: string, orderId: string) {
        try {
            const result = await firstValueFrom(
                this.http.post<{ success: boolean }>(`/api/orders/status/${orderId}`, { status }, { headers: { "X-Token": this.cookieService.get("token") } })
            );

            if (result.success) {
                for (let i in this.orders) {
                    if (this.orders[i]._id == orderId) {
                        this.orders.splice(+i, 1);
                        break;
                    }
                }
            }
        }
        catch (e: any) {
            if (e.error.reason == "Unauthorized") {
                this.cookieService.deleteAll();
                this.login();
                return;
            }
            console.log("ERROR =======> ", e.error.reason);
        }
    }
    async loadOrders() {
        try {
            const result = await firstValueFrom(
                this.http.get<[]>("/api/orders/list", { headers: { "X-Token": this.cookieService.get("token") } })
            );

            console.log(result);
            this.orders = result;
        } catch (e: any) {
            console.log("ERROR ====> ", e.error.reason);

            if (e.error.reason == "Unauthorized") {
                this.cookieService.deleteAll();
                this.login();
                return;
            };
        }
    }
    login() {
        const modal = this.modalContainer.createComponent(LoginModal);

        modal.instance.leave.subscribe((token) => {
            if (!token) {
                return;
            }

            this.cookieService.set("token", token, { expires: new Date(Date.now() + 3_600_000) });
            this.loadOrders();
            modal.destroy();
        });
    }
}
