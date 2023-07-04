import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Product {
    name: string;
    description: string;
    icons: string[];
    id: string;
    type: string;
    amount: number;
}

@Component({
    selector: 'app-cart',
    templateUrl: './cart.modal.html',
    styleUrls: ['./cart.modal.scss'],
})
export class CartModal implements OnInit {
    constructor() { }



    @Input() products: Product[] = [];
    @Output() leave = new EventEmitter();
    @Output() cartChange = new EventEmitter();


    ngOnInit() { }



    selectAmount(product: Product, amount: number) {
        this.cartChange.emit({ type: "change", id: product.id, amount });
        product.amount = amount;
    }
    remove(product: Product) {
        this.cartChange.emit({ type: "remove", id: product.id });
        for (const i in this.products) {
            if (this.products[i].id === product.id) {
                this.products.splice(parseInt(i), 1);
                break;
            }
        }
    }
    submit() {
        if (this.products.length == 0) {
            return;
        }
        this.leave.emit(true);
    }
    close() {
        this.leave.emit();
    }
}
