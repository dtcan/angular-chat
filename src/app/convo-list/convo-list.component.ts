import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convo-list',
  templateUrl: './convo-list.component.html',
  styleUrls: ['./convo-list.component.css']
})
export class ConvoListComponent implements OnInit {
	
	convos : object[];
	
	constructor() {
		this.convos = [
			{
				id: 0,
				title: "Contact 0",
				subtitle: "Last message",
				img: ""
			},
			{
				id: 1,
				title: "Contact 1",
				subtitle: "Last message",
				img: ""
			},
			{
				id: 2,
				title: "Contact 2",
				subtitle: "Last message",
				img: ""
			},
			{
				id: 3,
				title: "Contact 3",
				subtitle: "Last message",
				img: ""
			},
			{
				id: 4,
				title: "Contact 4",
				subtitle: "Last message",
				img: ""
			}
		];
	}
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
	}

}
