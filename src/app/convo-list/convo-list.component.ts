import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectionService } from '../selection.service';
import { getConvos, getUserId } from '../requests';

@Component({
  selector: 'app-convo-list',
  templateUrl: './convo-list.component.html',
  styleUrls: ['./convo-list.component.css'],
  inputs: ['sanitizer']
})
export class ConvoListComponent implements OnInit {
	
	sanitizer : DomSanitizer;
	mobile : boolean = false;
	
	getConvosFromRequest() : object[] {
		let convos = getConvos(getUserId);
		for (let con of convos) {
			con.safeImg = this.sanitizer.bypassSecurityTrustUrl(con.img);
		}
		return convos;
	}
	
	constructor(private selection : SelectionService) { }
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
	}

}
