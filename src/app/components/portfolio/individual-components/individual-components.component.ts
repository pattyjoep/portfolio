import { Component } from '@angular/core';

export interface IndividualComponent {
	id: string;
	name: string;
  selector: string;
}

@Component({
  selector: 'app-individual-components',
  templateUrl: './individual-components.component.html',
  styleUrls: ['./individual-components.component.scss']
})
export class IndividualComponentsComponent {


  individualComponents: IndividualComponent[] = [
    {
			id: "loginSignUpPage",
			name: "Login / Sign Up Page",
			selector:"app-login-signup-page"
		},
    {
			id: "toggleSwitch",
			name: "Toggle Switch",
			selector:"app-toggle-switch"
		},
    {
			id: "navigationMenu",
			name: "Navigation Menu",
			selector:"app-navigation-menu"
		},

  ]

  individualComponentsSorted: IndividualComponent[] = [];

	constructor() {}

	ngOnInit(): void {
		this.individualComponentsSorted = this.individualComponents.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
	}


}
