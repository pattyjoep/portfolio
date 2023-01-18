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
      description: "Keep track of and trade resources while playing the board game, Diplomacy, with this website. More features to come!",
      image: "diplomacy.png",
      gitHubRepoURL: "https://github.com/pjpetro/Diplomacy",
      productionURL: "https://pjpetro.github.io/Diplomacy/"
    },
    {
      id: "PasswordGenerator",
      name: "Password Generator",
      description: "Need a password, but can't think of anything to use? Generate a secure password here with the click of a button!",
      image: "password_generator.png",
      gitHubRepoURL: "https://github.com/pjpetro/PasswordGenerator",
      productionURL: "https://pjpetro.github.io/PasswordGenerator/"
    },
    {
      id: "WeatherDashbord",
      name: "Weather Dashbord",
      description: "Look up the weather of a specific city with this weather dashboard and see the 5 day forecast.",
      image: "weather_dashboard.png",
      gitHubRepoURL: "https://github.com/pjpetro/WeatherDash",
      productionURL: "https://pjpetro.github.io/WeatherDash/"
    },
  ]
  projectsSorted: Project[] = []
  
  constructor(

  ) {
  
     
  }

  ngOnInit(): void {
    this.projectsSorted = this.projects.sort( (a, b) => {
      return a.name.localeCompare(b.name);
    } )
  }




}
