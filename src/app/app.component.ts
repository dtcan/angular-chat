import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title : string;
	messageScreen : boolean;
	
	showAlert(str) {
		alert(str);
	}
	
	ngOnInit() {
		this.title = 'AngularChat';
		this.mobile = (window.screen.width < 1024);
	}
}
