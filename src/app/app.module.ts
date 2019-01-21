import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { ConvoListComponent } from './convo-list/convo-list.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ConvoSingleComponent } from './convo-single/convo-single.component';
import { MessageComponent } from './message/message.component';
import { SelectionService } from './selection.service';

@NgModule({
  declarations: [
    AppComponent,
    ConvoListComponent,
    ConversationComponent,
    ConvoSingleComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule, InfiniteScrollModule
  ],
  providers: [SelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
