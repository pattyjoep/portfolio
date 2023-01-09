import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  sideMenuOpen = false;


  toggleSidebar(): void {
    console.log("open SideBar");
    this.sideMenuOpen = true;
  }

}
