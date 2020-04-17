import {Component, HostBinding, HostListener} from '@angular/core'

@Component({
    selector: 'credit-card-component',
    styleUrls: ['credit-card.component.scss'],
    templateUrl : 'credit-card.component.html'
})

export class CreditCardComponent{

    @HostBinding('style.border')
    border : string

    @HostListener('input', ['$event'])
    OnKeyDown(event: KeyboardEvent)
    {
        const input = event.target as HTMLInputElement;
        let trimmed = input.value.replace(/\s+/g,'');
        if(trimmed.length > 16)
        {
            trimmed = trimmed.substr(0, 16)
        } 

        let numbers = [];
        for(let i = 0; i < trimmed.length ; i+=4)
        {
            numbers.push(trimmed.substr(i, 4));
        }
        input.value = numbers.join(' ');

        input.style.border = '';
        if(/[^\d]+/.test(trimmed)){
            input.style.border = '1px solid red';
        }
    }
}