import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getUserId, getConvos, getConversation, getDateString } from './requests';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
	
	sanitizer : DomSanitizer;
	
	lastUser : any;
	lastConvos : object[];
	lastConversationId : any;
	lastConversation : object[];
	
	getConvosFromRequest(forceUpdate : boolean = false) : object[] {
		let userId = getUserId();
		if(this.lastUser !== userId || forceUpdate) {
			this.lastUser = userId;
			this.lastConvos = getConvos(getUserId());
			for (let convo of this.lastConvos) {
				convo.safeImg = this.sanitizer.bypassSecurityTrustUrl(convo.img);
			}
		}
		
		return this.lastConvos;
	}
	
	getConversationFromRequest(activeConvo : any, forceUpdate : boolean = false) : object[] {
		if(this.lastConversationId !== activeConvo || forceUpdate) {
			this.lastConversationId = activeConvo;
			let conversation = getConversation(activeConvo);
			for(let i in conversation) {
				conversation[i].inChain = (i > 0 && conversation[i-1].author == conversation[i].author);
			}
			this.lastConversation = conversation;
		}
		
		return this.lastConversation;
	}
	
	getDateStringFromRequest(date : any) : string {
		return getDateString(date);
	}
	
	constructor(sanitizer : DomSanitizer) {
		this.sanitizer = sanitizer;
	}
	
}
