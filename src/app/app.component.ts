import { Component } from '@angular/core';

export interface Project {
  name: string;
  image?: string;
  description?: string;
  gitHubRepoURL?: string;
  productionURL?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  projects: Project[] = [
    {
      name: "Task Manager",
      description: "Keep all of your 'to-dos' nice and tidy with this kanban style task manager containging a drag and drop UI to update task status.",
      image: "../assets/photos/ProjectScreenshot_TaskManager.png"

    }
  ]




}
