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
    // this.newchat = new chat;
    // this.newchat.firstname = 'toto';
    // this.newchat.lastname = '';
    // this.newchat.phone = 12;
    // this.newchat.email = 'ffgg@hhhk.com';
    // this.newchat.img = 'assets/chats/cat-g1.jpg';
    
  }

}
