import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent as ProjectsContentComponent } from '../../components/projects/projects.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectsContentComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Projects – Vaibhav Khandelwal',
      description: 'Explore Vaibhav\'s AI and web development projects, including LangChain chatbots, hospital systems, and emotion-based recommendations.',
      url: 'https://vaibhavkhandelwal-portfolio.vercel.app/projects',
      keywords: 'Vaibhav Khandelwal Projects, AI Portfolio, LangChain, Full-Stack Web Apps, Machine Learning Projects'
    });
  }
}
