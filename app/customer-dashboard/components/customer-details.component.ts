import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Customer } from '../models/customer.interface'

@Component({
    selector : 'customer-details',
    styleUrls : ['customer-details.component.scss'],
    template : `
    <div>      
      <span class = "status" *ngIf = "detail.status == 1"  [class.Active] = "detail.status"></span>
      <span class = "status" *ngIf = "detail.status == 2"  [class.Enquiry] = "detail.status"></span>
      <span class = "status" *ngIf = "detail.status == 3"  [class.Closed] = "detail.status"></span>
      <span class = "status" *ngIf = "detail.status == 4"  [class.Hold] = "detail.status"></span>
      <div *ngIf = "editing">
      <input type = "text" 
      [value] = "detail.firstName"
      (input) = "OnNameChange(name.value)"
      #name
      >
      </div>
      <div *ngIf = "!editing">
      {{detail.firstName}} </div>
      {{detail.lastName}}
      {{detail.phoneNumber}}
      {{detail.postalCode}}
      {{detail.address}}

      <div *ngIf= "detail.details?.length >0">
        <div *ngFor = "let customerDetail of detail.details">
        {{customerDetail.customNotes}}
      </div>      
      </div>
      <div >
        <div>
        <button (click)= "toggleEdit()" >
        {{editing ? 'Done' : 'Edit'}}</button>
        </div>
        <div>
        <button (click)= "OnRemove()" >
        Remove</button>
        </div>
      </div>    
    </div>
    `
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