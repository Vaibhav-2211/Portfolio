import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AboutMeComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'About Me – Vaibhav Khandelwal',
      description: 'Learn about Vaibhav Khandelwal, an aspiring technology professional with experience in programming, machine learning, and cloud development.',
      url: 'https://vaibhavkhandelwal-portfolio.vercel.app/about',
      keywords: 'About Vaibhav Khandelwal, Technology Professional Background, AI, LangChain, Full-Stack Projects'
    });
  }
}
