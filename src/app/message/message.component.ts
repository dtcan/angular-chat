import { Component } from '@angular/core';
import { RequestService } from '../request.service';

const emojiRegex = /[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  inputs: ['message', 'isActive']
})
export class MessageComponent {
	
	request : RequestService;
	imgRatio: number;
	
	isEmoji(str) : boolean {
		return (str.replace(emojiRegex, "") === "");
	}
	
	imageLoad(args) : void {
		this.imgRatio = args.target.naturalWidth / args.target.naturalHeight;
	}
	
	getMessageStyle(message) : string {
		let cls : string = '';
		switch(message.type) {
			case 'text':
				cls += !this.isEmoji(message.content) ? 'card mw-75' : '';
				break;
			case 'image':
				const maxWidth : number = 75;
				const maxHeight : number = 45;
				cls += 'card msg-img mw-'+(Math.min(Math.round(this.imgRatio * (maxHeight/20)) * 20, maxWidth));
				break;
		}
		
		if(!(message.type === 'text') || !this.isEmoji(message.content)) {
			cls += message.align === 'right' ? ' bg-primary' : ' bg-light';
		}
		cls += message.align === 'right' ? ' msg-fromyou' : ' msg';
		cls += ' float-' + message.align;
		
		return cls;
	}
	
	constructor(request : RequestService) {
		this.request = request;
		this.imgRatio = 0;
	}
	
}
