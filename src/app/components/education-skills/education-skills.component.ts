import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from "../../pipes/translate.pipe";
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-education-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './education-skills.component.html',
  styleUrl: './education-skills.component.scss'
})
export class EducationSkillsComponent {
  constructor(public content: ContentService) {}
}


