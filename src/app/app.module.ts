import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvoListComponent } from './convo-list/convo-list.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ConvoSingleComponent } from './convo-single/convo-single.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvoListComponent,
    ConversationComponent,
    ConvoSingleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
