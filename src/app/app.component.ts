import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  sideMenuOpen = true;
  sideMenuOpenMobile = false;

  onRouterOutletActivate(event : any) {
    console.log(event);
  }


  toggleSidebar(event: Event, boolean: boolean, platform?: string): void {
    event.preventDefault();
    console.log("toggle SideBar");
    // this.sideMenuOpen = boolean;

    this.sideMenuOpenMobile = boolean;

    // if (platform === "mobile") {
    //   this.sideMenuOpenMobile = boolean;
    // }

  }

}
