import { Component } from '@angular/core';

export interface Project {
  id: string;
  name: string;
  image?: string;
  description?: string;
  gitHubRepoURL?: string;
  productionURL?: string;
}

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent {

  projects: Project[] = [
    {
      id: "TaskManager",
      name: "Task Manager",
      description: "Keep all of your 'to-dos' nice and tidy with this kanban style task manager containging a drag and drop UI to update task status.",
      image: "task_manager.png",
      gitHubRepoURL: "https://github.com/pjpetro/DayPlanner",
      productionURL: "https://pjpetro.github.io/DayPlanner/"
    },
    {
      id: "diplomacy",
      name: "Diplomacy",
      description: "Keep all of your 'to-dos' nice and tidy with this kanban style task manager containging a drag and drop UI to update task status.",
      image: "task_manager.png",
      gitHubRepoURL: "https://github.com/pjpetro/DayPlanner",
      productionURL: "https://pjpetro.github.io/DayPlanner/"
    }
  ]






}
