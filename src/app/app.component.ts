import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ConvoListComponent } from './convo-list/convo-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	@ViewChild(ConvoListComponent) convos : ConvoListComponent;
	title : string;
	
	deselect() {
		this.convos.setActive(null);
	}
	
	activeId() {
		return null;
	}
	
	ngAfterViewInit() {
		setTimeout(() => this.activeId = () => this.convos.activeId, 0);
	}
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
	}
	
	constructor() {
		this.title = 'AngularChat';
	}
}
