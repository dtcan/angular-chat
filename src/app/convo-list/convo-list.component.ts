import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { getConvos, getUserId } from '../requests'

@Component({
  selector: 'app-convo-list',
  templateUrl: './convo-list.component.html',
  styleUrls: ['./convo-list.component.css'],
  inputs: ['sanitizer']
})
export class ConvoListComponent implements OnInit {
	
	activeId;
	sanitizer : DomSanitizer;
	
	setActive(id) {
		if(this.activeId === id) {
			this.activeId = null;
		}else {
			this.activeId = id;
		}
	}
	
	getConvosFromRequest() {
		let convos = getConvos(getUserId);
		for (let con of convos) {
			con.safeImg = this.sanitizer.bypassSecurityTrustUrl(con.img);
		}
		return convos;
	}
	
	constructor() {
		this.activeId = null;
	}
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
	}

}
