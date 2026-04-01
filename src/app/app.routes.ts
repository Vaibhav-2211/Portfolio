import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { UrlNormalizationGuard } from "./guards/url-normalization.guard";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Home',
      description: 'Vaibhav Khandelwal - Aspiring technology professional specializing in AI-driven and full-stack software projects. Explore portfolio, experience and projects.',
      keywords: 'Vaibhav Khandelwal, AI Developer, LangChain, Full-Stack, Portfolio, Web Development'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'About Me',
      description: 'Learn about Vaibhav Khandelwal, an aspiring technology professional with strong programming, ML and cloud fundamentals background.',
      keywords: 'About Vaibhav Khandelwal, AI, LangChain, Full-Stack, IT Student'
    }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Experience',
      description: 'Explore Vaibhav Khandelwal\'s machine learning internship and full-stack project experience with real-time applications.',
      keywords: 'Vaibhav Khandelwal Experience, Machine Learning, LSTM, AI Projects, Full-Stack'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Projects',
      description: 'Explore Vaibhav Khandelwal\'s projects in AI chatbots, hospital management systems, and emotion-based recommendations.',
      keywords: 'Vaibhav Khandelwal Projects, AI Chatbot, LangChain, Python, Web Development'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Contact',
      description: 'Get in touch with Vaibhav Khandelwal for collaboration opportunities, project inquiries, or professional discussions.',
      keywords: 'Contact Vaibhav Khandelwal, AI Intern, LangChain, Full-Stack, Web Development Services'
    }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Resume',
      description: 'Download or view Vaibhav Khandelwal\'s professional resume. Comprehensive overview of skills, experience, and achievements in AI and full-stack development.',
      keywords: 'Vaibhav Khandelwal Resume, AI CV, LangChain Resume, Full-Stack Developer CV'
    }
  },
  // Legacy hash-based URL redirects
  {
    path: 'about-me',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  {
    path: 'testimonials',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' } // Wildcard route for 404 pages
];
