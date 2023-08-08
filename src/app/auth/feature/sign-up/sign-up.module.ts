import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from 'src/app/auth/feature/sign-up/sign-up-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from 'src/app/auth/feature/sign-up/sign-up.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, SignUpRoutingModule, ReactiveFormsModule],
})
export class SignUpModule {}
