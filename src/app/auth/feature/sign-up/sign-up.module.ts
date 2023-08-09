import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from 'src/app/auth/feature/sign-up/sign-up-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from 'src/app/auth/feature/sign-up/sign-up.component';
import { AuthService } from 'src/app/auth/data-access/auth.service';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, SignUpRoutingModule, ReactiveFormsModule],
  providers: [AuthService],
})
export class SignUpModule {}
