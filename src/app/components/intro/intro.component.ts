import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  @Input() name: string = 'Александр Самощук';
  @Input() role: string = '.NET Developer';
  @Input() experienceYears: number = 5;
  @Input() age: number = 28;
  @Input() photoUrl: string = '/avatar.jpg';
}


