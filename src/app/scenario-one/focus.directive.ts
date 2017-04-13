import { Directive, ElementRef, Input } from '@angular/core';
@Directive({ selector: '[myFocus]' })
export class FocusDirective {
    @Input() index;
    constructor(private el: ElementRef) {}
    focus(): void {
        this.el.nativeElement.focus();
    }
}
