import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  @Input() phone: string = '+375295580632';
  @Input() telegram: string = '@dk_tengen';
  @Input() email: string = 'toni.samoshuk@gmail.com';
  @Input() linkedin: string = 'https://www.linkedin.com/in/anton-samoshuk-21b109241';
}


