import {Component, Input, Output, EventEmitter} from '@angular/core'
import { Customer } from '../models/customer.interface'

@Component({
    selector : 'customer-details',
    styleUrls : ['customer-details.component.scss'],
    template : `
    <div>      
      <span class = "status" *ngIf = "detail.Status == 1"  [class.Active] = "detail.Status"></span>
      <span class = "status" *ngIf = "detail.Status == 2"  [class.Enquiry] = "detail.Status"></span>
      <span class = "status" *ngIf = "detail.Status == 3"  [class.Closed] = "detail.Status"></span>
      <span class = "status" *ngIf = "detail.Status == 4"  [class.Hold] = "detail.Status"></span>
      <div *ngIf = "editing">
      <input type = "text" 
      [value] = "detail.FirstName"
      (input) = "OnNameChange(name.value)"
      #name
      >
      </div>
      <div *ngIf = "!editing">
      {{detail.FirstName}} </div>
      {{detail.LastName}}
      {{detail.PhoneNumber}}
      {{detail.PostalCode}}
      {{detail.Address}}

      <div *ngIf= "detail.Details?.length >0">
        <div *ngFor = "let customerDetail of detail.Details">
        {{customerDetail.CustomNotes}}
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
      this.detail.FirstName = value;
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