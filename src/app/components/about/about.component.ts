import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  
  flipProjectCard(projectID: string): void {
    const id = document.getElementById(projectID) as HTMLDivElement;
    if (id.classList.contains("flipped")) {
      id.classList.remove("flipped");
    } else {
      id.classList.add("flipped");
    }
  }

}
