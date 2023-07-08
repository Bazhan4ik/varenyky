import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-cook',
    templateUrl: './cook.modal.html',
    styleUrls: ['./cook.modal.scss'],
    standalone: true,
    imports: [CommonModule, IonicModule]
})
export class CookModal implements OnInit {
    constructor() { }



    @Output() leave = new EventEmitter()



    ngOnInit() { }



    close() {
        this.leave.emit();
    }
}
