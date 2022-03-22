import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private DATA_URL = 'assets/data/projects.json';

  constructor(
    private http: HttpClient
  ) { }

  public getFeaturedProjects(): Observable<Project[]> {
    // Ici on fait directement le filter des projets qui on le featured a true car on a pas de logique côté serveur pour le filter à se moment là
    // Dans le futur, où il y aurait un serveur il faut faire le filter là bas et pas ici
    return this.http.get<Project[]>(`${this.DATA_URL}`).pipe(
      map((projects) => projects.filter((project) => project.featured))
    );
  }
}
