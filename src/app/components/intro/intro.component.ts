import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { TranslatePipe } from "../../pipes/translate.pipe";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  constructor(public content: ContentService) {}
}


