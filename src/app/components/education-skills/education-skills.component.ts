import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-skills.component.html',
  styleUrl: './education-skills.component.scss'
})
export class EducationSkillsComponent {
  @Input() degree: string = 'Высшее';
  @Input() year: string = '2024';
  @Input() university: string = 'Полесский государственный университет, Пинск';
  @Input() faculty: string = 'Инженерный, Информационные системы и технологии';
  @Input() skills: string[] = ['SQL','PostgreSQL','HTML','C#','ASP.NET','.NET','Entity Framework','RabbitMQ','Angular','Docker','Git','TypeScript','GraphQL','REST API'];
}


