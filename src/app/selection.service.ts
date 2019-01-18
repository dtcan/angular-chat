import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
	
	activeConvo : any;
	activeMessage : any;
	
	setActiveConvo(id) : void {
		if(this.activeConvo === id) {
			this.activeConvo = null;
		}else {
			this.activeConvo = id;
		}
		this.onConversationChange();
	}
	
	setActiveMessage(id) : void {
		if(this.activeMessage === id) {
			this.activeMessage = null;
		}else {
			this.activeMessage = id;
		}
	}
	
	onConversationChange() : void {}
	
	constructor() {
		this.activeConvo = null;
		this.activeMessage = null;
	}
  
}
