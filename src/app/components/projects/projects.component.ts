import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI-Powered Oceanography Chatbot',
      description: [
        'Engineered an AI-driven chatbot using LangChain, vector databases, and Google Search API to retrieve and analyze oceanographic data efficiently.',
        'Developed semantic search functionality utilizing natural language processing, reducing average search query time by 3 seconds and enabling real-time access to critical oceanographic datasets.',
        'Designed a user-friendly interface for real-time interaction with oceanography datasets.'
      ],
      techStack: ['LangChain', 'Vector Database', 'Google Search API', 'NLP'],
      image: '/assets/oceanography-chatbot.webp',
      aosImage: 'fade-right'
    },
    {
      title: 'Hospital Management System',
      description: [
        'Built a full-stack web system to streamline hospital workflows, covering patient onboarding, appointment coordination, and inventory control.',
        'Implemented modules for OPD queue handling, bed availability monitoring, and secure medical records.'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: '/assets/hospital-management-system.webp',
      aosImage: 'fade-left'
    },
    {
      title: 'Real-Time Emotion-Based Product Recommendation',
      description: [
        'Developed a real-time recommendation system using Python and LSTM to suggest products based on user emotions detected through facial expressions.',
        'Utilized emotion-aware feature embeddings to match user emotional states with relevant product recommendations in real time.'
      ],
      techStack: ['Python', 'OpenCV', 'Keras', 'LSTM', 'NumPy', 'Tkinter'],
      image: '/assets/emotion-product-recommendation.webp',
      aosImage: 'fade-right'
    }
  ];
}
