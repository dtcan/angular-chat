import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../selection.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-convo-list',
  templateUrl: './convo-list.component.html',
  styleUrls: ['./convo-list.component.css']
})
export class ConvoListComponent implements OnInit {
	
	selection : SelectionService;
	request : RequestService;
	mobile : boolean = false;
	
	constructor(selection : SelectionService, request : RequestService) {
		this.selection = selection;
		this.request = request;
	}
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
	}

}
