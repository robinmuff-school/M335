import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  // TODO: In der Angular Doku nachlesen, was ViewChild macht und basierend auf deinem HTML XXXXX ersetzen
  /*
  @ViewChild('chat-eingabe', {static: false}) messageInput;
  */
  @ViewChild('scrollMe', {static: false}) private myScrollContainer: ElementRef;

  message: string;
  showSpinnerIcon = false;
  showDates = false;
  chatList: Observable<ChatMessage[]>;
  chatListRef: AngularFireList<ChatMessage>;
  groupNumber = 'G1';
  currentUser = 'BossBüba';

  constructor(private alertCtrl: AlertController, public afDb: AngularFireDatabase) {
    this.chatListRef = afDb.list('/chats/' + this.groupNumber);
    this.chatList = this.chatListRef.valueChanges();
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  swipeEvent(swipe) {
    console.log("LOL")
    if (swipe.direction === 2 || swipe.direction === 4) {
      this.showDates = !this.showDates;
    }
  }
  async sendMessage() {
    if (this.message !== '') {
      let formattedDate = new Date().toLocaleString();
      const msg: ChatMessage = {
        username: this.currentUser,
        text: this.message,
        date: formattedDate
      }

      this.showSpinnerIcon = true;
      await this.chatListRef.push(msg)
      this.showSpinnerIcon = false;

      this.message = "";
    }
  }
}
interface ChatMessage {
  username: string;
  text: string;
  date: any;
}