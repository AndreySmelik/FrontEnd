import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormControlsModule } from 'src/app/core/form-controls/form-controls.module';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    FormControlsModule,
   MatButtonModule,
   MatTableModule,
  // ReactiveFormsModule
  ]
})
export class LoginPageModule { }
