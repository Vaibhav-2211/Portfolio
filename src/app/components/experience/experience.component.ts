import { Component } from '@angular/core';

interface Experience {
  position: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Machine Learning Intern',
      company: 'Maulana Azad National Institute of Technology',
      companyUrl: 'https://www.manit.ac.in',
      startDate: 'June 2025',
      endDate: 'July 2025',
      achievements: [
        'Processed and analyzed 10,000+ facial emotion images using Pandas and NumPy, preparing data for LSTM model training.',
        'Analyzed and optimized LSTM-based machine learning models in Python to improve facial emotion recognition accuracy for real-time product recommendations.',
        'Applied regression and feature optimization techniques to improve model accuracy and interpret key design performance metrics.'
      ]
    }
  ];
}

