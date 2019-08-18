import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

import { SelectionService } from './selection.service';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	header : object;
	selection : SelectionService;
	request : RequestService;
	
	deselect() : void {
		this.selection.setActiveConvo(null);
	}
	
	strInput() : void {
		let str = $('#message-input').val();
		$('#message-input').val('');
		$('#message-input').blur();
		if(str) {
			if(this.request.sendMessageFromRequest(<string>str, this.selection.activeConvo)) {
				this.scrollDown();
				this.update();
			}
		}
	}
	
	update() : void {
		if(this.request.shouldUpdateFromRequest()) {
			this.request.getConversationFromRequest(this.selection.activeConvo, true);
			this.request.getConvosFromRequest(true);
			this.header = this.request.getHeaderFromRequest(this.selection.activeConvo);
		}
	}
	
	getNextConversationPage() : void {
		this.request.loadNextConversationFromRequest();
	}
	
	getNextConvosPage() : void {
		this.request.loadNextConvosFromRequest();
	}
	
	scrollDown() : void {
		$('#conversation-view').scrollTop($('#conversation-view')[0].scrollHeight);
	}
	
	getViewHeight() : string {
		let heightOffset = $('#text-input-div').outerHeight() + $('#desktop-navbar').outerHeight();
		return ($('#mobile-content').height() - heightOffset)+'px';
	}
	
	getPaddingTop() : string {
		return $('#mobile-navbar').height()+'px';
	}
	
	onConversationChange() : void {
		this.selection.activeMessage = null;
		this.header = this.request.getHeaderFromRequest(this.selection.activeConvo);
		$('#message-input').val('');
		setTimeout(this.scrollDown.bind(this), 0);
	}
	
	ngOnInit() {
		setInterval(this.update.bind(this), 1000);
	}
	
	constructor(selection : SelectionService, request : RequestService) {
		this.selection = selection;
		this.selection.onConversationChange = this.onConversationChange.bind(this);
		this.request = request;
		this.header = this.request.getHeaderFromRequest(null);
	}
}
