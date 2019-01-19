import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectionService } from './selection.service';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title : string;
	mobile : boolean = false;
	selection : SelectionService;
	request : RequestService;
	
	deselect() : void {
		this.selection.setActiveConvo(null);
	}
	
	strInput() : void {
		let str = $('#message-input').val();
		$('#message-input').val('');
		if(str) {
			if(this.request.sendMessageFromRequest(str, this.selection.activeConvo)) {
				this.scrollDown();
				this.update();
			}
		}
	}
	
	update() : void {
		if(this.request.shouldUpdateFromRequest()) {
			this.request.getConversationFromRequest(this.selection.activeConvo, true);
			this.request.getConvosFromRequest(true);
		}
	}
	
	scrollDown() : void {
		$('#conversation-view').scrollTop($('#conversation-view')[0].scrollHeight);
	}
	
	onConversationChange() : void {
		this.selection.activeMessage = null;
		$('#message-input').val('');
		setTimeout(() => $('#conversation-view').css('height', $(window).height() - $('#text-input-div').outerHeight()), 0);
		setTimeout(this.scrollDown, 0);
	}
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
		if(this.mobile) {
			setTimeout(() => $('#mobile-content').css('padding-top', $('#mobile-navbar').height()), 0);
		}
		setTimeout(() => $('#conversation-view').css('height', $(window).height() - $('#text-input-div').outerHeight()), 0);
		$(window).on('resize', (e) => $('#conversation-view').css('height', $(window).height() - $('#text-input-div').outerHeight()));
		setInterval(this.update.bind(this), 1000);
	}
	
	constructor(selection : SelectionService, request : RequestService) {
		this.title = 'AngularChat';
		this.selection = selection;
		this.selection.onConversationChange = this.onConversationChange.bind(this);
		this.request = request;
	}
}
