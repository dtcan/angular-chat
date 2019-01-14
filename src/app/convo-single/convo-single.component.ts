import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convo-single',
  templateUrl: './convo-single.component.html',
  styleUrls: ['./convo-single.component.css'],
  inputs: ['convo']
})
export class ConvoSingleComponent implements OnInit {
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
	}

}
