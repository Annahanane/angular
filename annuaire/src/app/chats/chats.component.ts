import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/models/chat.models'


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  newChat !: Chat;
  ngOnInit() {
    this.newChat = new Chat;
    this.newChat.nom = 'toto';
    this.newChat.nombre = 1;
    this.newChat.coleur = 'blanc';
    this.newChat.img = 'assets/chats/cat-g1.jpg';
    
  }

}
