import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../selection.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-convo-list',
  templateUrl: './convo-list.component.html',
  styleUrls: ['./convo-list.component.css']
})
export class ConvoListComponent implements OnInit {
	
	selection : SelectionService;
	request : RequestService;
	
	mobile : boolean = false;
	searchTerm : string = "";
	searchResults : object[] = [];
	
	constructor(selection : SelectionService, request : RequestService) {
		this.selection = selection;
		this.request = request;
	}
	
	clearSearch() {
		$("#search-bar").val("");
		this.setSearchTerm("");
	}
	
	setSearchTerm(term) {
		this.searchTerm = term;
		this.searchResults = [];
		setTimeout(() => this.search(term), 1000);
	}
	
	search(term) {
		if(this.searchTerm === term) {
			if(this.searchTerm !== "") {
				console.log(term);
				this.request.searchConvosFromRequest(this.setResults.bind(this), term);
			}
		}
	}
	
	setResults(results : object[]) : void {
		this.searchResults = results;
	}
	
	ngOnInit() {
		this.mobile = (window.screen.width < 1024);
	}

}
