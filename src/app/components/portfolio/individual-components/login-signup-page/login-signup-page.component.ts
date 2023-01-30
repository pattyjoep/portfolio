import { Component } from "@angular/core";

@Component({
	selector: "app-login-signup-page",
	templateUrl: "./login-signup-page.component.html",
	styleUrls: ["./login-signup-page.component.scss"],
})
export class LoginSignupPageComponent {
	constructor() {}

	flipLoginCard(projectID: string): void {
		const id = document.getElementById(projectID) as HTMLDivElement;
		if (id.classList.contains("flipped")) {
			id.classList.remove("flipped");
		} else {
			id.classList.add("flipped");
		}
	}
}
