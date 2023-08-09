import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInRoutingModule } from 'src/app/auth/feature/sign-in/sign-in-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/auth/data-access/auth.service';
import { SignInComponent } from 'src/app/auth/feature/sign-in/sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, ReactiveFormsModule],
  providers: [AuthService],
})
export class SignInModule {}
