// This section is specially for the test display (you don't need it!)
// Scroll down to see the functions you need to include

let lastRead = [0,0,0,0];
let lastChecked = [3,6,7,0];
let parrotTyping = false;

let testConversations = [
	[
		{
			id: 0,
			author: 'You',
			content: 'Hello',
			subcontent: 'Seen',
			time: (new Date(Date.now() - 60000)).toLocaleString(),
			align: 'left'
		},
		{
			id: 1,
			author: '',
			content: 'Hey wassup',
			subcontent: 'Seen',
			time: (new Date(Date.now() - 30000)).toLocaleString(),
			align: 'right'
		},
		{
			id: 2,
			author: 'You',
			content: 'This is a conversation',
			subcontent: 'Seen',
			time: (new Date(Date.now()- 10000)).toLocaleString(),
			align: 'left'
		},
		{
			id: 3,
			author: '',
			content: 'You can even use emojis in it 😋',
			subcontent: 'Delivered',
			time: (new Date(Date.now()- 5000)).toLocaleString(),
			align: 'right'
		}
	],
	[
		{
			id: 0,
			author: 'Friend 1',
			content: 'Hello? Is anyone there?',
			subcontent: 'Seen by everyone',
			time: (new Date(Date.now()- 3600000)).toLocaleString(),
			align: 'left'
		},
		{
			id: 1,
			author: 'Friend 1',
			content: 'Hello?!?',
			subcontent: 'Seen by everyone',
			time: (new Date(Date.now()- 600000)).toLocaleString(),
			align: 'left'
		},
		{
			id: 2,
			author: '',
			content: 'Hey I\'m here',
			subcontent: 'Seen by everyone',
			time: (new Date(Date.now()- 60000)).toLocaleString(),
			align: 'right'
		},
		{
			id: 3,
			author: 'Friend 2',
			content: 'Me too',
			subcontent: 'Seen by everyone except Friend 1',
			time: (new Date(Date.now()- 30000)).toLocaleString(),
			align: 'left'
		},
		{
			id: 4,
			author: 'Friend 3',
			content: 'Yes I am here!!!',
			subcontent: 'Seen by everyone except Friend 1',
			time: (new Date(Date.now()- 10000)).toLocaleString(),
			align: 'left'
		},
		{
			id: 5,
			author: 'Friend 3',
			content: '😃😃😃',
			subcontent: 'Seen by everyone except Friend 1',
			time: (new Date(Date.now()- 9000)).toLocaleString(),
			align: 'left'
		},
		{
			id: 6,
			author: '',
			content: 'Looks like group chats are working fine in this UI! 👍',
			subcontent: 'Seen by Friend 3',
			time: (new Date(Date.now()- 5000)).toLocaleString(),
			align: 'right'
		}
	],
	[
		{
			id: 0,
			author: '',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ex, auctor a purus quis, commodo interdum ipsum. Fusce ligula nisl, gravida at mauris a, aliquam feugiat tellus. Mauris non tellus in risus viverra mollis. Mauris ornare egestas dolor, sit amet cursus turpis feugiat quis. Cras tincidunt cursus maximus. Vestibulum molestie purus diam, a porta dolor sagittis ut. Sed accumsan bibendum urna, quis bibendum tellus maximus id. Sed egestas ullamcorper bibendum. Sed ut elit ut massa venenatis egestas. Vestibulum pharetra efficitur orci quis pulvinar. Aliquam eu orci lectus. Nulla porttitor malesuada faucibus. Maecenas pellentesque, felis non aliquam porta, massa leo volutpat tortor, ut commodo felis tortor in felis. Morbi ac pharetra dolor.',
			subcontent: 'Seen',
			time: (new Date(Date.now()- (360000 * 10))).toLocaleString(),
			align: 'right'
		},
		{
			id: 1,
			author: 'Friendo',
			content: 'Cras pretium mauris at ullamcorper laoreet. Suspendisse dignissim molestie volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in convallis metus. Integer mi dolor, iaculis nec dolor at, tempus tempus turpis. Etiam metus nibh, dapibus in nunc sed, euismod cursus ex. Suspendisse molestie feugiat ex at pellentesque. Nullam a dolor et neque viverra aliquam. Praesent commodo ex nec mauris faucibus fringilla. In eu hendrerit dui. Donec in nulla dapibus massa elementum bibendum. Vivamus vel sem faucibus, hendrerit leo sodales, posuere nulla.',
			subcontent: 'Seen',
			time: (new Date(Date.now()- (360000 * 9))).toLocaleString(),
			align: 'left'
		},
		{
			id: 2,
			author: '',
			content: 'Proin placerat lectus ac imperdiet volutpat. Suspendisse dapibus sit amet magna non fringilla. Morbi consectetur elit sed porttitor lacinia. Proin in luctus eros. Nulla finibus nulla ac est dignissim condimentum. Mauris vitae sapien quis ligula luctus volutpat aliquet bibendum nibh. Curabitur porta aliquet ligula sed feugiat. Nulla volutpat, ipsum in vestibulum porta, lorem sapien tristique nulla, finibus varius ligula lacus vitae elit. Vestibulum fermentum lorem ac magna tincidunt mattis. Nullam mollis ipsum a feugiat rhoncus. Fusce efficitur massa urna, consectetur convallis nibh bibendum eget. Maecenas pretium volutpat dui, sit amet auctor tortor lacinia a. Etiam ac ligula sodales, tempus sapien et, posuere odio.',
			subcontent: 'Seen',
			time: (new Date(Date.now()- (360000 * 8))).toLocaleString(),
			align: 'right'
		},
		{
			id: 3,
			author: 'Friendo',
			content: 'Aenean quis sem in nunc iaculis vestibulum maximus eget erat. Praesent mi arcu, pharetra quis est eu, imperdiet consectetur augue. Vivamus sed consectetur metus, eget ornare lectus. Morbi id urna lectus. Maecenas imperdiet ac nibh sodales pharetra. Ut a tempus orci, eget fringilla arcu. Aenean nibh felis, aliquet sit amet libero eget, aliquam pellentesque velit. Ut sed tempus nibh. Ut consectetur orci in elit luctus, vitae ornare tortor rhoncus. Morbi lobortis leo nec hendrerit suscipit. Aliquam scelerisque elementum est, at convallis ex accumsan sed. Pellentesque fermentum risus quis ex elementum, efficitur sodales urna mollis. Integer sem sapien, rutrum et malesuada cursus, malesuada eget augue. Aliquam ut finibus ante, sed accumsan sem. Mauris suscipit odio erat, nec fermentum odio pulvinar et. Pellentesque a feugiat nibh.',
			subcontent: 'Seen',
			time: (new Date(Date.now()- (360000 * 7))).toLocaleString(),
			align: 'left'
		},
		{
			id: 4,
			author: '',
			content: 'Proin aliquet quam in molestie luctus. Curabitur et feugiat velit. Praesent ultricies accumsan nisl, ultricies euismod felis. In hac habitasse platea dictumst. Nam volutpat eleifend tempor. Phasellus finibus dictum laoreet. Phasellus vestibulum aliquam eros, eget sollicitudin metus tincidunt quis. Donec commodo sodales sem aliquet finibus. Etiam sagittis et nisi ut rutrum. Etiam turpis nisl, luctus at vehicula id, molestie et velit. Vivamus vel tortor eu nibh dignissim ultrices.',
			subcontent: 'Seen',
			time: (new Date(Date.now()- (360000 * 6))).toLocaleString(),
			align: 'right'
		},
		{
			id: 5,
			author: 'Friendo',
			content: 'Suspendisse dignissim ex justo, et auctor sem porta in. In ornare velit eros, quis convallis orci rhoncus in. Morbi id nisi eros. Maecenas porttitor tempor ligula in tempor. Nullam sed ipsum et dui auctor tempor. Quisque nec turpis eleifend, pulvinar elit vitae, gravida tellus. Nulla vitae semper nunc, quis elementum lectus. Ut lorem lorem, scelerisque quis lorem ac, pharetra commodo quam. Sed erat leo, dignissim vel consequat eget, dapibus sed quam. Aliquam erat volutpat. Nulla purus diam, interdum a dolor et, aliquam condimentum magna. Morbi tellus ligula, elementum consectetur hendrerit ac, congue sed urna. Suspendisse in tristique nisi. Maecenas non ligula facilisis, rutrum nibh sed, tincidunt metus. Mauris sit amet lacinia libero. Quisque eget est consequat, consectetur tortor eget, tincidunt est.',
			subcontent: 'Seen',
			time: (new Date(Date.now()- (360000 * 5))).toLocaleString(),
			align: 'left'
		},
		{
			id: 6,
			author: '',
			content: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consequat tempor orci, nec tempor urna luctus sit amet. Praesent id nulla sed ligula tincidunt congue elementum sit amet purus. Suspendisse at dictum ante. Sed metus metus, iaculis nec erat quis, vehicula pellentesque magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ante erat, maximus non erat et, dignissim vestibulum velit. Pellentesque commodo, magna non ultrices interdum, risus ante pulvinar lacus, lobortis rhoncus odio neque et ligula. Suspendisse scelerisque nisl a sapien consectetur faucibus. Pellentesque ac sollicitudin felis.',
			subcontent: 'Seen',
			time: (new Date(Date.now()- (360000 * 3))).toLocaleString(),
			align: 'right'
		},
		{
			id: 7,
			author: 'Friendo',
			content: 'Integer ultrices leo diam, a dignissim ipsum interdum sed. Donec ut erat eget mi hendrerit venenatis. Praesent mauris lacus, interdum nec neque vitae, iaculis lacinia mi. Duis semper ligula ut magna gravida, quis suscipit elit pulvinar. In egestas porta nunc, in posuere dui laoreet vitae. Maecenas condimentum vel dolor vel varius. Suspendisse vel vehicula ipsum. Aliquam tempor, mauris eu egestas sagittis, sapien ligula pellentesque libero, ornare maximus libero ante eget justo. In orci tortor, egestas nec fringilla vel, iaculis et felis. Praesent semper leo sed turpis dapibus pellentesque. Curabitur velit nulla, dapibus eu vehicula sed, dignissim vitae ligula. Nam velit ipsum, maximus quis tempor nec, ultrices eu est.',
			subcontent: 'Seen',
			time: (new Date(Date.now()- 360000)).toLocaleString(),
			align: 'left'
		}
	],
	[
		{
			id: 0,
			author: '💬 ParrotBot',
			content: 'Say anything, and I\'ll repeat it back to you! Please be patient, it will take me a few seconds to reply.',
			subcontent: 'Seen',
			time: (new Date()).toLocaleString(),
			align: 'left'
		}
	]
];

// END test section

// Edit the functions below according to your implementation

export function onConvoSelect(convo : object) : void {
	// Called when a conversation is selected in the conversation list
	// convo: a client-side representation of the conversation, which has the same attributes as given in getConvos
	
	if(convo.id !== 4) {
		convo.emphasis = null;
	}
}

export function getPlaceholderText(conversationId : any) : string {
	// Return text to display in the input text box
	
	if(conversationId === 3 && parrotTyping) {
		return 'ParrotBot is typing...';
	}else {
		return 'Say something...';
	}
}

export function getUserId() : any {
	// Return the id of the user currently logged in
	
	return 'me';
}

export function getConvos(callback, userId) : void {
	// Call callback, with a list of conversations available to the current user as a parameter
	// Conversations will be displayed as ordered here
	
	callback([
		{
			id: 0,
			title: "You",
			subtitle: (testConversations[0][testConversations[0].length - 1].author ? '' : 'You: ') + testConversations[0][testConversations[0].length - 1].content,
			img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==",
			emphasis: (lastRead[0] < testConversations[0].length - 1 ? 'Unread' : null)
		},
		{
			id: 1,
			title: "Group Chat",
			subtitle: (testConversations[1][testConversations[1].length - 1].author ? testConversations[1][testConversations[1].length - 1].author : 'You') + ': ' + testConversations[1][testConversations[1].length - 1].content,
			img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==",
			emphasis: (lastRead[1] < testConversations[1].length - 1 ? 'New!' : null)
		},
		{
			id: 2,
			title: "Friendo",
			subtitle: (testConversations[2][testConversations[2].length - 1].author ? '' : 'You: ') + testConversations[2][testConversations[2].length - 1].content,
			img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==",
			emphasis: (lastRead[2] < testConversations[2].length - 1 ? 'Your text here' : null)
		},
		{
			id: 3,
			title: "💬 ParrotBot",
			subtitle: (parrotTyping ? 'ParrotBot is typing...' : (testConversations[3][testConversations[3].length - 1].author ? '' : 'You: ') + testConversations[3][testConversations[3].length - 1].content),
			img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==",
			emphasis: (lastRead[3] < testConversations[3].length - 1 ? 'New Message' : null)
		},
		{
			id: 4,
			title: "Test Conversation",
			subtitle: (new Date()).toLocaleString(),
			img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==",
			emphasis: "This convo is special"
		}
	]);
}

export function getConversation(callback, userId, conversationId, pageNum) : void {
	// Call callback, with a list of the messages in the requested conversation as a parameter
	// Messages will be displayed as ordered here
	
	let arr = [];
	if(conversationId === 4) {
		for(var i = 50; i >= 1; i--) {
			arr.push({
				id: (50 * pageNum) + i,
				author: '',
				content: 'This is Message ' + ((50 * pageNum) + i),
				subcontent: 'Message ' + ((50 * pageNum) + i),
				time: ((50 * pageNum) + i) + ' days ago',
				align: 'right'
			});
		}
	}else if(pageNum === 0) {
		lastRead[conversationId] = testConversations[conversationId].length - 1;
		arr = $.extend(true, [], testConversations[conversationId]);
	}
	
	callback(arr);
}

export function sendMessage(message : string, conversationId : any) : boolean {
	// Send the given message from the current user in the given conversation
	// Return true if successful
	
	if(conversationId !== 4) {
		testConversations[conversationId].push({
			id: testConversations[conversationId].length,
			author: '',
			content: message,
			subcontent: 'Sent',
			time: (new Date()).toLocaleString(),
			align: 'right'
		});
		setTimeout(() => { testConversations[conversationId][testConversations[conversationId].length - 1].subcontent = 'Delivered'; lastChecked[conversationId] = 0; }, 1000);
		if(conversationId === 3) {
			setTimeout(() => { testConversations[3][testConversations[3].length - 1].subcontent = 'Seen'; lastChecked[3] = 0; }, 3000);
			setTimeout(() => { parrotTyping = true; lastChecked[3] = 0; }, 5000);
			setTimeout(() => { testConversations[3].push({
				id: testConversations[3].length,
				author: 'ParrotBot',
				content: "Squawk! You just said: '" + message + "'",
				subcontent: 'Seen',
				time: (new Date()).toLocaleString(),
				align: 'left'
			}); parrotTyping = false; }, 8000);
		}
	}else {
		return false;
	}
	
	return true;
}

export function shouldUpdate(userId : any) : boolean {
	// Return true if the UI needs to be updated with new information (ie. messages)
	
	for(let i in testConversations) {
		if(lastChecked[i] < testConversations[i].length - 1) {
			lastChecked[i] = testConversations[i].length - 1;
			return true;
		}
	}
	
	return false;
}