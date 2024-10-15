import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

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
  selector: 'app-user-information',
  standalone: true,
  imports: [TableModule],
  templateUrl: './user-information.component.html',
  styleUrl: './user-information.component.css'
})

export class UserInformationComponent {
  @Input() userInformation: UserInformation[] = [];

  // getSeverity(status: string): string {
  //   switch (status) {
  //     case 'In Stock': return 'success';
  //     case 'Low Stock': return 'warning';
  //     case 'Out of Stock': return 'danger';
  //     default: return '';
  //   }
  // }
}
