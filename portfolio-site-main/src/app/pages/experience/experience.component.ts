import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent as ExperienceContentComponent } from '../../components/experience/experience.component';
import { SkillsComponent } from '../../components/skills/skills.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, ExperienceContentComponent, SkillsComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Experience – Vaibhav Khandelwal',
      description: 'Explore Vaibhav Khandelwal\'s machine learning and full-stack project experience including LSTM-based emotion recognition and web systems.',
      url: 'https://vaibhavkhandelwal-portfolio.vercel.app/experience',
      keywords: 'Vaibhav Khandelwal Experience, Machine Learning Intern, AI Project, Full-Stack Development, LangChain'
    });
  }
}
