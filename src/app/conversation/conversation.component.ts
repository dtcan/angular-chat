import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../selection.service';
import { getConversation } from '../requests';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {
	
	selection : SelectionService;
	
	getConversationFromRequest() : object[] {
		let con = getConversation(this.selection.activeConvo);
		for(let i in con) {
			con[i].inChain = (i > 0 && con[i-1].author == con[i].author);
		}
		return con;
	}
	
	constructor(selection : SelectionService) {
		this.selection = selection;
	}
	
}
