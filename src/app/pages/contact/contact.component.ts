import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent as ContactFormComponent } from '../../components/contact/contact.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Contact – Vaibhav Khandelwal',
      description: 'Get in touch with Vaibhav Khandelwal for collaboration opportunities, project inquiries, or professional discussions on AI and software development.',
      url: 'https://vaibhavkhandelwal1303.vercel.app/contact',
      keywords: 'Contact Vaibhav Khandelwal, AI Intern, LangChain, Full-Stack Development, Project Collaboration'
    });
  }
}
