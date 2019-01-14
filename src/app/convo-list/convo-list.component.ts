import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convo-list',
  templateUrl: './convo-list.component.html',
  styleUrls: ['./convo-list.component.css']
})
export class ConvoListComponent implements OnInit {
	
	activeId;
	
	setActive(id) {
		if(this.activeId === id) {
			this.activeId = null;
		}else {
			this.activeId = id;
		}
	}
	
	getConvos() {
		// Edit this according to your implementation
		return [
			{
				id: 0,
				title: "Contact 0",
				subtitle: "Last message",
				img: "",
				emphasis: "Unread"
			},
			{
				id: 1,
				title: "Contact 1",
				subtitle: "Last message",
				img: "",
				emphasis: "New!"
			},
			{
				id: 2,
				title: "Contact 2",
				subtitle: "Last message",
				img: "",
				emphasis: "Your text here"
			},
			{
				id: 3,
				title: "Contact 3",
				subtitle: "Last message",
				img: "",
				emphasis: null
			},
			{
				id: 4,
				title: "Contact 4",
				subtitle: "Last message",
				img: "",
				emphasis: null
			}
		];
	}
	
	constructor() {
		this.activeId = null;
	}
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
	}

}
