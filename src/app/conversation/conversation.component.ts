import { Component, OnInit } from '@angular/core';
import { getConversation } from '../requests';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
  inputs: ['activeId']
})
export class ConversationComponent {
	
	getConversationFromRequest() {
		let con = getConversation(this.activeId);
		for(let i in con) {
			con[i].inChain = (i > 0 && con[i-1].author == con[i].author);
		}
		return con;
	}
}
