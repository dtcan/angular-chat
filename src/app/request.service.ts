import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getUserId, getConvos, getConversation, getDateString } from './requests';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
	
	sanitizer : DomSanitizer;
	
	getConvosFromRequest() : object[] {
		let convos = getConvos(getUserId());
		for (let con of convos) {
			con.safeImg = this.sanitizer.bypassSecurityTrustUrl(con.img);
		}
		return convos;
	}
	
	getConversationFromRequest(activeConvo) : object[] {
		let con = getConversation(activeConvo);
		for(let i in con) {
			con[i].inChain = (i > 0 && con[i-1].author == con[i].author);
		}
		return con;
	}
	
	getDateStringFromRequest(date) : string {
		return getDateString(date);
	}
	
	constructor(sanitizer : DomSanitizer) {
		this.sanitizer = sanitizer;
	}
	
}
