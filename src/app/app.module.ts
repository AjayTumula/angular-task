import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MyFormComponent } from './my-form/my-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { UserInformationComponent } from './user-information/user-information.component';

@NgModule({
  declarations: [
    MyFormComponent,
    UserInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    AppComponent,
    TableModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    AppComponent,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class AppModule { }
