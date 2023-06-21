import { Component, OnInit} from '@angular/core';
import { Contact } from 'src/models/contacts.models'
import { Input } from '@angular/core'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  tabContact !: Contact[];
  ngOnInit()  {
    this.tabContact = [
      {
        firstname :"toto",
        lastname : "gar",
        phone :1145632700,
        email  : "sdffmhl@gmail.com",
      },
      {
        firstname :"foo",
        lastname : "var",
        phone : 1145112789,
        email  :"sdfbbbf@gmail.com", 
      },
      {
        firstname : "bar",
        lastname  : "bar",
        phone : 1145662789,
        email  : "sdfvff@gmail.com",
      },
    ]
  }
}





