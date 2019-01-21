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
			getConvos(this.getConvosCallback.bind(this), userId);
		}
		
		return this.lastConvos;
	}
	
	getConvosCallback(convos : object[]) : void {
		this.lastConvos = convos;
		for (let convo of this.lastConvos) {
			convo.safeImg = this.sanitizer.bypassSecurityTrustUrl(convo.img);
		}
	}
	
	getConversationFromRequest(activeConvo : any, forceUpdate : boolean = false) : object[] {
		if(activeConvo === null) {
			this.lastConversationId = null;
			this.lastConversation = [];
		}else if(this.lastConversationId !== activeConvo || forceUpdate) {
			this.lastConversationId = activeConvo;
			this.lastConversationPage = 0;
			getConversation(this.getConversationCallback.bind(this), getUserId(), activeConvo, this.lastConversationPage);
		}
		
		return this.lastConversation;
	}
	
	getConversationCallback(conversation : object[]) : void {
		for(let i in conversation) {
			conversation[i].inChain = (i > 0 && conversation[i-1].author == conversation[i].author);
		}
		this.lastConversation = conversation;
	}
	
	loadNextConversationFromRequest() : void {
		this.lastConversationPage++;
		getConversation(this.loadNextConversationCallback.bind(this), getUserId(), this.lastConversationId, this.lastConversationPage);
	}
	
	loadNextConversationCallback(conversation : object[]) : void {
		let distance = $('#conversation-view')[0].scrollHeight - $('#conversation-view').scrollTop();
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
