import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Customer } from '../models/customer.interface'
import { Router } from '@angular/router'
import { CustomerAddComponent } from '../../ReactiveForms/Containers/customer-add.component';
import { CustomerDashboardService } from '../customer-dashboard.service';

@Component({
  selector: 'customer-details',
  styleUrls: ['customer-details.component.scss'],
  templateUrl: 'customer-details.component.html'
})

export class CustomerDetailsComponent {

  popoverTitle = 'Popover title';
  popoverMessage = 'Popover description';
  confirmClicked = false;
  cancelClicked = false;

  @Input()
  detail: Customer

  @Input()
  rowNumber: number;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;
  constructor(private route: Router, private customerDashboardService: CustomerDashboardService) {

  }
  OnNameChange(value: string) {
    this.detail.firstName = value;
  }

  OnLastNameChange(value: string) {
    this.detail.lastName = value;
  }

  OnPhoneNumberChange(value: string) {
    this.detail.phoneNumber = value;
  }

  OnPostalCodeChange(value: string) {
    this.detail.phoneNumber = value;
  }

  OnAddressChange(value: string) {
    this.detail.address = value;
  }

  OnCustomerNotesChange(value: string) {
    this.detail.notes = value;
  }

  toggleEdit() {
    this.edit.emit(this.detail);
    this.customerDashboardService.SelectedCustomer(this.detail);
    this.route.navigate(['/AddCustomer']);
  }

  OnRemove() {
    this.remove.emit(this.detail);
  }

}