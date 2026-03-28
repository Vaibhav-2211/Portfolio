import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GoogleAnalyticsService } from './service/google-analytics.service';
import { SeoService } from './service/seo.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    RouterOutlet, RouterLink, RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router,
    private googleAnalyticsService: GoogleAnalyticsService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.googleAnalyticsService.loadGoogleAnalytics();

    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            AOS.init({ duration: 1000, once: true, mirror: false });
            AOS.refresh();
          }, 100);
        }
      });
    }

    // Set default SEO meta tags
    this.seoService.updateMetaTags({
      title: 'Vaibhav Khandelwal | Aspiring Technology Professional | Portfolio',
      description: 'Aspiring technology professional with experience in AI, full-stack web development, and cloud fundamentals. Explore projects in LangChain, real-time emotion products, and hospital systems.',
      url: 'https://vaibhavkhandelwal-portfolio.vercel.app/',
      image: 'https://vaibhavkhandelwal-portfolio.vercel.app/assets/logo.jpeg',
      keywords: 'Vaibhav Khandelwal, AI Developer, LangChain, Full-Stack, Python, JavaScript, Web Development, Resume, Portfolio'
    });

    // Ensure canonical URL is set for current page
    this.seoService.setCanonicalForCurrentPage();
  }
}
