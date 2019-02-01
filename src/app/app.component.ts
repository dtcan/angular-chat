import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

import { SelectionService } from './selection.service';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	header : object;
	mobile : boolean = false;
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
	
	getNextPage() : void {
		this.request.loadNextConversationFromRequest();
	}
	
	scrollDown() : void {
		$('#conversation-view').scrollTop($('#conversation-view')[0].scrollHeight);
	}
	
	fixViewHeight() : void {
		let heightOffset = $('#text-input-div').outerHeight();
		if(!this.mobile) {
			console.log(this.mobile);
			heightOffset += $('#desktop-navbar').outerHeight();
		}
		$('#conversation-view').css('height', $('#mobile-content').height() - heightOffset);
	}
	
	onConversationChange() : void {
		this.selection.activeMessage = null;
		this.header = this.request.getHeaderFromRequest(this.selection.activeConvo);
		$('#message-input').val('');
		setTimeout(this.fixViewHeight.bind(this), 0);
		setTimeout(this.scrollDown.bind(this), 0);
	}
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
		if(this.mobile) {
			setTimeout(() => $('#mobile-content').css('padding-top', $('#mobile-navbar').height()), 0);
		}
		setTimeout(this.fixViewHeight.bind(this), 0);
		$(window).on('resize', this.fixViewHeight.bind(this));
		setInterval(this.update.bind(this), 1000);
	}
	
	constructor(selection : SelectionService, request : RequestService) {
		this.selection = selection;
		this.selection.onConversationChange = this.onConversationChange.bind(this);
		this.request = request;
		this.header = this.request.getHeaderFromRequest(null);
	}
}
