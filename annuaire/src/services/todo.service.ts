import { Injectable } from '@angular/core';
import { Chat } from 'src/models/chat.models';
import { Contact } from 'src/models/contacts.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tabContact :Contact[] =[
    { 
      firstname :"toto",
      lastname : "gar",
      phone :1145632700,
      email  : "sdffmhl@gmail.com",
      img :'assets/chats/cat-g2.jpg',
      id : 1,
    },
    {
      firstname :"foo",
      lastname : "var",
      phone : 1145112789,
      email  :"sdfbbbf@gmail.com",
      img :'assets/chats/cat-g3.jpg', 
      id :2,
    },
    {
      firstname : "bar",
      lastname  : "bar",
      phone : 1145662789,
      email  : "sdfvff@gmail.com",
      img :'assets/chats/cat-g4.jpg',
      id : 3,
    },
  ];
  Contacts():Contact[] {
     return this.tabContact;

  }
  recupererContactById(id:number): Contact {
    for( let i = 0; i < this.tabContact.length; i++){
      if( this.tabContact[i].id === id)
      return this.tabContact[i];
    }
    return new Contact();
  }

  
}
  

