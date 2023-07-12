import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PopoverComponent } from './popover/popover.component';

@Component({
    selector: 'app-qna',
    templateUrl: './qna.component.html',
    styleUrls: ['./qna.component.scss'],
})
export class QnaComponent implements OnInit {
    constructor() { };

    currentPopover!: ComponentRef<PopoverComponent>;


    questions: { title: string; answer: string; }[] = [
        {
            title: "Are they handmade?",
            answer: "Yes! We are two sisters from Ukraine who came to Canada a year ago and started the family business",
        },
        {
            title: "How can I buy them?",
            answer: "You can order them through the website and choose either delivery or pick up",
        },
        {
            title: "Where are you located?",
            answer: "We located in beautiful Niagara-on-the-Lake",
        },
        {
            title: "Can you deliver?",
            answer: "Yes, we deliver them in NOTL and also can deliver to other towns in the Niagara Region by prior arrangement. The delivery fee varies.",
        },
        {
            title: "Are they gluten-free?",
            answer: "Our dough contains gluten, but we are working on new recipes to provide you with other options!",
        },
        {
            title: "Are they vegetarian/vegan?",
            answer: "We do have vegetarian options but not vegan since our dough contains butter. You will find a special sign on the menu",
        },
        {
            title: "Ingredients of the dough?",
            answer: "Wheat flour, water, butter, sour cream, and salt.",
        },
        {
            title: "Thawe before cooking?",
            answer: "Not necessary. You can cook them right away, just a few minutes longer.",
        },
        {
            title: "How can I contact you?",
            answer: "Phone number: +1 (289) 968 8603, email address: varenyky.onthelake@gmail.com"
        }
    ];


    @ViewChild("popoverContainer", { read: ViewContainerRef }) popoverContainer!: ViewContainerRef;



    ngOnInit() { }


    cook() {

    }
    open(index: number, event: Event) {

        let target = event.target as HTMLButtonElement;

        if (!target.type) {
            target = (event.target as HTMLButtonElement).parentElement as HTMLButtonElement;
        }

        this.currentPopover?.destroy();

        this.currentPopover = this.popoverContainer.createComponent(PopoverComponent);

        this.currentPopover.instance.message = this.questions[index].answer;

        this.currentPopover.instance.position = { left: target.offsetLeft, width: target.offsetWidth, top: target.offsetTop };

        this.currentPopover.instance.leave.subscribe(() => {
            this.currentPopover.destroy();
            this.currentPopover = undefined!;
        });
    }
}
