import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  logo: string;
  isInvertLogo: boolean;
  proficiency: 'Expert' | 'Intermediate' | 'Beginner';
  experience: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: [`
    .skill-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
  `]
})
export class SkillsComponent {

  frontends = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 }
  ];

  backends = [
    { name: 'LangChain', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 1 },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 3 }
  ];

  databases = [
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 3 },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 }
  ];

  opss = [
    { name: 'VSCode', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vscode/vscode-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/github/github-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 }
  ];

}
