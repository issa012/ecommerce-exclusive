import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items = [
    { name: 'Home', link: '#' },
    { name: 'Contact', link: '#' },
    { name: 'About', link: '#' },
    { name: 'Sign Up', link: '#' },
  ];
}
