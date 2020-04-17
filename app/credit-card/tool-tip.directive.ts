import {Directive, OnInit, Input, ElementRef, ViewContainerRef} from '@angular/core'

@Directive({
    selector: '[tooltip1]',
    exportAs : 'tooltip1'
})

export class ToolTipDirective implements OnInit{
    tooltipElement = document.createElement('div');
    visible= false;

    constructor(
        private element: ElementRef
    ){}

    ngOnInit(){
        this.tooltipElement.className = 'tootip';
        this.element.nativeElement.appendChild(this.tooltipElement);
        this.element.nativeElement.classList.add('tooltip-container');
    }
 

    @Input()
    set tooltip1(value){
        this.tooltipElement.textContent = value;
    }

    show(){
        this.tooltipElement.classList.add('tooltip-active');
    }

    hide(){
        this.tooltipElement.classList.remove('tooltip-active');
    }

}