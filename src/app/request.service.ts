import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getHeader, getPlaceholderText, getUserId, getConvos, searchConvos, getConversation, sendMessage, shouldUpdate } from './requests';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
	
	sanitizer : DomSanitizer;
	
	lastUser : any;
	lastConvos : object[];
	lastConversationId : any;
	lastConversationPage : number = 0;
	lastConversation : object[] = [];
	
	getHeaderFromRequest(conversationId : any) : object {
		return getHeader(conversationId);
	}
	
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
	
	searchConvosFromRequest(callback, searchTerm : string) : void {
		searchConvos(((results) => this.searchConvosCallback(callback, results)).bind(this), getUserId(), searchTerm, 0);
	}
	
	searchConvosCallback(callback, results : object[]) : void {
		for (let result of results) {
			result.safeImg = this.sanitizer.bypassSecurityTrustUrl(result.img);
		}
		
		callback(results.length === 0 ? [null] : results);
	}
	
	getConversationFromRequest(activeConvo : any, forceUpdate : boolean = false) : object[] {
		if(activeConvo === null) {
			this.lastConversationId = null;
			this.lastConversation = [];
		}else if(this.lastConversationId !== activeConvo || forceUpdate) {
			this.lastConversationPage = 0;
			getConversation(((c) => this.getConversationCallback(c, this.lastConversationId !== activeConvo)).bind(this), getUserId(), activeConvo, this.lastConversationPage);
			this.lastConversationId = activeConvo;
		}
		
		return this.lastConversation;
	}
	
	getConversationCallback(conversation : object[], noKeep : boolean) : void {
		for(let i in conversation) {
			conversation[i].inChain = (+i > 0 && conversation[+i-1].author == conversation[i].author);
		}
		
		if(this.lastConversation.length === 0 || noKeep) {
			this.lastConversation = conversation;
			return;
		}
		
		let index : number = 0;
		for(let i in conversation) {
			if(conversation[i].id === this.lastConversation[this.lastConversation.length - 1].id) {
				index = +i;
				break;
			}
		}
		
		for(let i in conversation) {
			if(+i <= index) {
				this.lastConversation[this.lastConversation.length + (+i - index) - 1] = conversation[i];
			}else {
				this.lastConversation.push(conversation[i]);
			}
		}
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
