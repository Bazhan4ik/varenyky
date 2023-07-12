import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AddingModal } from './adding/adding.modal';
import { CartModal } from './cart/cart.modal';
import { SubmitModal } from './submit/submit.modal';
import { CookModal } from './cook/cook.modal';

interface Product {
    name: string;
    description: string;
    icons: string[];
    id: string;
    type: string;
    sweet?: boolean;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    constructor(
        private http: HttpClient,
    ) { };


    products: Product[] = [];
    showProducts: Product[] = [];
    priceString = "30 pcs, ≈600g, $30";
    selected: { id: string; amount: number; }[] = [];
    tab = "traditional";


    @ViewChild("modalContainer", { read: ViewContainerRef }) modalContainer!: ViewContainerRef;



    async ngOnInit() {
        try {
            this.selected = JSON.parse(localStorage.getItem("cart") || "[]") || [];
        } catch (error) {
            this.selected = [];
            console.error(error);
        }
        try {
            const products = await firstValueFrom(
                this.http.get("/api/products")
            );

            this.products = products as Product[];
            this.showProducts = this.products.filter(p => p.type == "traditional");
        } catch (e) {
            window.location.reload();
        }
    }





    cook() {
        const component = this.modalContainer.createComponent(CookModal);

        component.instance.leave.subscribe(() => {
            component.destroy();
        });
    }
    orderConfirmation() {
        const component = this.modalContainer.createComponent(SubmitModal);

        component.instance.leave.subscribe((submitted: boolean) => {
            component.destroy();
            if (submitted) {
                this.selected = [];
                localStorage.removeItem('cart');
            }
        });
    }
    openCart() {
        const component = this.modalContainer.createComponent(CartModal);


        const products = [];
        for (const selected of this.selected) {
            for (const product of this.products) {
                if (product.id === selected.id) {
                    products.push({ ...product, amount: selected.amount });
                }
            }
        }


        component.instance.products = products;


        component.instance.leave.subscribe((submitted: boolean) => {
            component.destroy();
            if (submitted) {
                this.orderConfirmation();
            }
        });
        component.instance.cartChange.subscribe(({ type, id, amount }: { type: string; amount: number; id: string; }) => {
            if (type == "change") {
                for (const selected of this.selected) {
                    if (selected.id === id) {
                        selected.amount = amount;
                        localStorage.setItem('cart', JSON.stringify(this.selected));
                        break;
                    }
                }
            } else {
                this.remove(id);
            }
        });
    }
    includes = (id: string) => {
        for (const product of this.selected) {
            if (product.id === id) {
                return true;
            }
        }
        return false;
    }
    selectTab(tab: string) {
        this.tab = tab;
        this.showProducts = this.products.filter(p => p.type == tab);
    }
    add(product: Product) {

        const component = this.modalContainer.createComponent(AddingModal);

        component.instance.name = product.name.toLowerCase();

        component.instance.leave.subscribe((amount: number) => {
            component.destroy();

            if (amount) {
                this.selected.push({ id: product.id, amount });
                localStorage.setItem('cart', JSON.stringify(this.selected));
            }
        });
    }
    remove(t: string) {
        for (const [index, el] of this.selected.entries()) {
            if (el.id === t) {
                this.selected.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(this.selected));
                break;
            }
        }
    }

}
