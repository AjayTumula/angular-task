import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-my-form',
  standalone: true, 
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
  imports: [FormsModule, DropdownModule]
})
export class MyFormComponent {

  @Output() close = new EventEmitter<void>();

  name: string = '';
  locationName: string = '';
  contact: string = '';
  locationId: string = '';
  phoneNumber: string = '';
  email: string = '';
  addressLineOne: string = '';
  addressLineTwo: string = '';
  state: string = '';
  city: string = '';
  zipCode: string = '';
  country: string = '';
  shipFormTax: string = '';
  mailRoomContactName: string = '';
  mailRoomPhoneNumber: string = '';

  countries: { label: string, value: string }[] = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Australia', value: 'AU' },
  ];


  onSubmit() {
    console.log('Form Data:', {
      name: this.name,
      locationName: this.locationName,
      contact: this.contact,
      locationId: this.locationId,
      phoneNumber: this.phoneNumber,
      email: this.email,
      addressLineOne: this.addressLineOne,
      addressLineTwo: this.addressLineTwo,
      state: this.state,
      city: this.city,
      zipCode: this.zipCode,
      country: this.country,
      shipFormTax: this.shipFormTax,
      mailRoomContactName: this.mailRoomContactName,
      mailRoomPhoneNumber: this.mailRoomPhoneNumber
    });
  }
}
