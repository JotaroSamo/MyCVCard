import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from "../../pipes/translate.pipe";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @Input() text: string = 'Коротко расскажите о себе: ключевые навыки, сильные стороны, подход к работе и цели. Текст можно заменить на ваш.';
}


