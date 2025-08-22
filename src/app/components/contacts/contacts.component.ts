import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from "../../pipes/translate.pipe";
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  constructor(public content: ContentService) {}
}


