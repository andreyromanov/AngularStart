import { Component, OnInit } from '@angular/core';

@Component({
	selector: '[app-test]',
	template: `<div>
	Inline Template!, {{"Dear " + name}}

	<h2>{{2+2}}</h2>

	<h2> {{name.length}} </h2>

	<h2 class="text-success">{{greetUser()}}</h2>

	<h2 [class]="successClass">{{greetUser()}}</h2>

	<h2>{{siteUrl}}</h2>

	<input [id]="myId" type="text" value="Andrew">
	<br>
	<br>
	<button (click) = "onClick()">Greet</button>
	{{greeting}} <br><br>
	<input [(ngModel)]="name1" type="text">
	{{name1}} 
	<br>
	
	<div *ngIf="displayname; then thenblock; else elseblock"></div>
	
	<ng-template #thenblock>
	<h2 >CodeEvolution</h2>
	</ng-template>

	<ng-template #elseblock>
	<h2 >Hidden name</h2>
	</ng-template>

	<div [ngSwitch]="color">
		<div *ngSwitchCase="'red'">Red color.</div>
		<div *ngSwitchCase="'green'">Green color.</div>
		<div *ngSwitchCase="'blue'">Blue color.</div>
	</div>

	<div *ngFor="let color of colors">
		<h2 >{{color}}</h2>
	</div>

	</div>
	`,
	styles: [`
	.text-success{
		color: green;
	}
	.text-danger{
		color: red;
	}
	.text-special{
		font-style: italic;
	}
	`]
}
})
export class TestComponent implements OnInit {

	public name = "Andrew";
	public siteUrl = window.location.href;
	public myId = "testId";
	public successClass = "text-success";
	public greeting = "";
	public name1 = "";
	displayname = false;
	color = "green";
	public colors = ["red", "green", "blue", "orange"];


	constructor() { }

	ngOnInit() {
	}

	greetUser() {
		return "Hello " + this.name;
	}
	onClick(){
		this.greeting = "Hello, " + this.name;
	}
}
