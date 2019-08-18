import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../selection.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
	
	selection : SelectionService;
	request : RequestService;
	
	constructor(selection : SelectionService, request : RequestService) {
		this.selection = selection;
		this.request = request;
	}
	
}
