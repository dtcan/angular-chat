import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getPlaceholderText, getUserId, getConvos, getConversation, getDateString, sendMessage, shouldUpdate } from './requests';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
	
	sanitizer : DomSanitizer;
	
	lastUser : any;
	lastConvos : object[];
	lastConversationId : any;
	lastConversationPage : int = 0;
	lastConversation : object[];
	
	getPlaceholderFromRequest(conversationId : any) : string {
		if(conversationId !== null) {
			return getPlaceholderText(conversationId);
		}
		
		return "";
	}
	
	getConvosFromRequest(forceUpdate : boolean = false) : object[] {
		let userId = getUserId();
		if(this.lastUser !== userId || forceUpdate) {
			this.lastUser = userId;
			this.lastConvos = getConvos(userId);
			for (let convo of this.lastConvos) {
				convo.safeImg = this.sanitizer.bypassSecurityTrustUrl(convo.img);
			}
		}
		
		return this.lastConvos;
	}
	
	getConversationFromRequest(activeConvo : any, forceUpdate : boolean = false) : object[] {
		if(activeConvo === null) {
			this.lastConversationId = null;
			this.lastConversation = [];
		}else if(this.lastConversationId !== activeConvo || forceUpdate) {
			this.lastConversationId = activeConvo;
			this.lastConversationPage = 0;
			let conversation = getConversation(activeConvo, this.lastConversationPage);
			for(let i in conversation) {
				conversation[i].inChain = (i > 0 && conversation[i-1].author == conversation[i].author);
			}
			this.lastConversation = conversation;
		}
		
		return this.lastConversation;
	}
	
	loadNextConversationFromRequest() : void {
		this.lastConversationPage++;
		let distance = $('#conversation-view')[0].scrollHeight - $('#conversation-view').scrollTop();
		let conversation = getConversation(this.lastConversationId, this.lastConversationPage);
		for(let m of conversation.reverse()) {
			this.lastConversation.unshift(m);
		}
		setTimeout(() => $('#conversation-view').scrollTop($('#conversation-view')[0].scrollHeight - distance), 0);
	}
	
	getDateStringFromRequest(date : any) : string {
		return getDateString(date);
	}
	
	sendMessageFromRequest(message : string, conversationId : any) : boolean {
		return sendMessage(message, conversationId);
	}
	
	shouldUpdateFromRequest() : boolean {
		return shouldUpdate(getUserId());
	}
	
	constructor(sanitizer : DomSanitizer) {
		this.sanitizer = sanitizer;
	}
	
}
