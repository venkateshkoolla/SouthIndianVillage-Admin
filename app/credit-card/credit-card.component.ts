import {Component} from '@angular/core'

@Component({
    selector: 'credit-card-component',
    styleUrls: ['credit-card.component.scss'],
    template : `
    <div class = "main">
    <div class = "subMain">
    <form #form= "ngForm">
    <label class = "label">
        Creadit card number:
        <input class = "input" type = "text" name= "creditcardnumber" 
        placeholder= "Enter credit card number" credit-card-directive>
    </label>
    </form>
    </div>
    <div margin-left = 30px>
        <button type = "submit ">Pay</button>
    </div>
    </div>
    `
})

export class CreditCardComponent{

}