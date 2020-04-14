import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Customer } from '../models/customer.interface'

@Component({
    selector : 'customer-details',
    styleUrls : ['customer-details.component.scss'],
    templateUrl : 'customer-details.component.html'
})

export class CustomerDetailsComponent{
    
    @Input()
    detail : Customer

    @Output()
    remove : EventEmitter<any> = new EventEmitter();

    
    @Output()
    edit : EventEmitter<any> = new EventEmitter();


    editing : boolean = false;
    constructor(){

    }
    OnNameChange(value: string)
    {
      this.detail.firstName = value;
    }

    OnLastNameChange(value: string){
      this.detail.lastName = value;
    }
    
    OnPhoneNumberChange(value : string){
      this.detail.phoneNumber = value;
    }
    
    OnPostalCodeChange(value : string){
      this.detail.phoneNumber = value;
    }

    OnAddressChange(value : string){
      this.detail.address = value;
    }

    OnCustomerNotesChange(value: string){
      this.detail.details[0].customNotes = value;
    }

    toggleEdit(){
      if(this.editing){
        this.edit.emit(this.detail);
      }
      this.editing = !this.editing;   
    }

    OnRemove(){
      this.remove.emit(this.detail);
    }
}