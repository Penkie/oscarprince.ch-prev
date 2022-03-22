import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/common/models/project.model';
import { ProjectService } from 'src/app/common/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: Project[] | undefined;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    // Recherche et assignation des projets à la variable projects
    this.projectService.getFeaturedProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

}
