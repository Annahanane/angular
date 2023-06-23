import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/models/chat.models'


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  @Input() newChat !: Chat;

  ngOnInit(): void {
    // this.newChat = new Chat;
    // this.newChat.firstname = 'toto';
    // this.newChat.lastname = '';
    // this.newChat.phone = 12;
    // this.newChat.email = 'ffgg@hhhk.com';
    // this.newChat.img = 'assets/chats/cat-g1.jpg';
    
  }

}
