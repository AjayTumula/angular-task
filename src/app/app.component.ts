import { Component } from '@angular/core';
import { MyFormComponent } from './my-form/my-form.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { DropdownModule } from 'primeng/dropdown';

interface UserInformation {
  contactName: string;
  phoneNumber: number;
  email: string;
  addressLineOne: string;
  addressLineTwo: string;
  state: string;
  city: string;
  zipCode: number;
  country: string;
  status: string;
  actions: string
}
@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MyFormComponent, UserInformationComponent, DropdownModule] 
})

export class AppComponent {

  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  userInformation: UserInformation[] = [
    {
      contactName: 'John Doe',
      phoneNumber: 1234567890,
      email: 'john@example.com',
      addressLineOne: '123 Main St',
      addressLineTwo: '',
      state: 'NY',
      city: 'New York',
      zipCode: 10001,
      country: 'US',
      status: 'Active',
      actions: 'Edit/Delete'
    },
    {
      contactName: 'Mike',
      phoneNumber: 1234567895,
      email: 'mike@example.com',
      addressLineOne: '156 Main St',
      addressLineTwo: '',
      state: 'MI',
      city: 'New York',
      zipCode: 1051,
      country: 'US',
      status: 'Inactive',
      actions: 'Edit/Delete'
    },
    {
      contactName: 'John Doe',
      phoneNumber: 1234567890,
      email: 'john@example.com',
      addressLineOne: '123 Main St',
      addressLineTwo: '',
      state: 'NY',
      city: 'New York',
      zipCode: 10001,
      country: 'US',
      status: 'Active',
      actions: 'Edit/Delete'
    },
    {
      contactName: 'John Doe',
      phoneNumber: 1234567890,
      email: 'john@example.com',
      addressLineOne: '123 Main St',
      addressLineTwo: '',
      state: 'NY',
      city: 'New York',
      zipCode: 10001,
      country: 'US',
      status: 'Active',
      actions: 'Edit/Delete'
    }
  ]
}
