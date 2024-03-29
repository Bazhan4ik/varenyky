import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit, AfterViewInit {
    constructor() { }



    @Input() message!: string;
    @Input() position!: { width: number; left: number; top: number; };

    @ViewChild("popover") popover!: ElementRef<HTMLDivElement>
    @Output() leave = new EventEmitter();




    ngAfterViewInit(): void {
        const element = this.popover.nativeElement;

        element.style.left = (this.position.left + (this.position.width - element.offsetWidth)) + "px";
        element.style.top = this.position.top + "px";
    }
    ngOnInit() {
    }



    close() {
        this.leave.emit();
    }
}
