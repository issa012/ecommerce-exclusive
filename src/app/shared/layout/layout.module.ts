import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from 'src/app/shared/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
