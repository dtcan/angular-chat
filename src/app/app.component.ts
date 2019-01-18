import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectionService } from './selection.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title : string;
	sanitizer : DomSanitizer;
	selection : SelectionService;
	
	deselect() {
		this.selection.setActiveConvo(null);
	}
	
	onConversationChange() {
		this.selection.activeMessage = null;
		setTimeout(() => $('#conversation-view').css('height', $(window).height() - $('#text-input-div').outerHeight()), 0);
		setTimeout(() => $('#conversation-view').scrollTop($('#conversation-view')[0].scrollHeight), 0);
	}
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
		if(this.mobile) {
			setTimeout(() => $('#mobile-content').css('padding-top', $('#mobile-navbar').height()), 0);
		}
		setTimeout(() => $('#conversation-view').css('height', $(window).height() - $('#text-input-div').outerHeight()), 0);
		$(window).on('resize', (e) => $('#conversation-view').css('height', $(window).height() - $('#text-input-div').outerHeight()));
	}
	
	constructor(sanitizer : DomSanitizer, selection : SelectionService) {
		this.title = 'AngularChat';
		this.sanitizer = sanitizer;
		this.selection = selection;
		this.selection.onConversationChange = this.onConversationChange.bind(this);
	}
}
