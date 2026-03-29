import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent as ResumeContentComponent } from '../../components/resume/resume.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [CommonModule, ResumeContentComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Resume – Vaibhav Khandelwal',
      description: 'Download or view Vaibhav Khandelwal\'s professional resume. Includes education, certifications, ML internship, and AI/full-stack projects.',
      url: 'https://vaibhavkhandelwal1303.vercel.app/resume',
      keywords: 'Vaibhav Khandelwal Resume, AI Developer CV, LangChain Resume, Full-Stack Developer Resume'
    });
  }
}
