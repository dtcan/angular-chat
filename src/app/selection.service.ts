import { Injectable } from '@angular/core';
import { onConvoSelect } from './requests.ts';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
	
	activeConvo : any;
	activeMessage : any;
	
	setActiveConvo(convo) : void {
		if(convo === null) {
			this.activeConvo = null;
		}else {
			onConvoSelect(convo);
			if(this.activeConvo === convo.id) {
				this.activeConvo = null;
			}else {
				this.activeConvo = convo.id;
			}
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
