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
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

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

  flipProjectCard(projectID: string): void {
    const id = document.getElementById(projectID) as HTMLDivElement;
    if (id.classList.contains("flipped")) {
      id.classList.remove("flipped");
    } else {
      id.classList.add("flipped");
    }
  }

  rotate(direction: string): void {
    const carousel = document.getElementById('carousel') as HTMLDivElement;
    let currdeg  = 0;

    if(direction === "next"){
      currdeg = currdeg - 60;
    }
    if(direction === "prevous"){
      currdeg = currdeg + 60;
    }

    // carousel.({
    //   "-webkit-transform": "rotateY("+currdeg+"deg)",
    //   "-moz-transform": "rotateY("+currdeg+"deg)",
    //   "-o-transform": "rotateY("+currdeg+"deg)",
    //   "transform": "rotateY("+currdeg+"deg)"
    // });

  }

}
