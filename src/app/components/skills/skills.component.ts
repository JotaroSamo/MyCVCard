import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() title: string = 'Навыки';
  @Input() skills: string[] = ['SQL','PostgreSQL','HTML','C#','ASP.NET','.NET','Entity Framework','RabbitMQ','Angular','Docker','Git','TypeScript','GraphQL','REST API'];
}


