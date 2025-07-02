import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { MainSectionComponent } from "../../shared/main-section/main-section.component";
import { AboutSectionComponent } from "../../shared/about-section/about-section.component";
import { ProjectsComponent } from '../../shared/projects/projects.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MainSectionComponent, MainSectionComponent, AboutSectionComponent, ProjectsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './_home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private GithubService: GithubService) { }

  ngOnInit(): void {
    this.GithubService.getRepos().subscribe({
      next: (response) => {
        // console.log(response);
      }
    });
   }
}
