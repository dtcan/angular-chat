import { Component } from '@angular/core';
import { getDateString } from '../requests';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  inputs: ['message', 'isActive']
})
export class MessageComponent {
	
	getDateStringFromRequest(date) : string {
		return getDateString(date);
	}
	
}
