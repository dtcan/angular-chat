import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
	
	activeConvo;
	activeMessage;
	
	setActiveConvo(id) {
		if(this.activeConvo === id) {
			this.activeConvo = null;
		}else {
			this.activeConvo = id;
		}
		this.onConversationChange();
	}
	
	setActiveMessage(id) {
		if(this.activeMessage === id) {
			this.activeMessage = null;
		}else {
			this.activeMessage = id;
		}
	}
	
	onConversationChange() {}
	
	constructor() {
		this.activeConvo = null;
		this.activeMessage = null;
	}
  
}
