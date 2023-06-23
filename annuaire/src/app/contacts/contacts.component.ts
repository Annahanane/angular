import { Component, OnInit} from '@angular/core';
import { Contact } from 'src/models/contacts.models';
import { TodoService } from 'src/services/todo.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  tabContact !: Contact[];
  constructor(private todoService:TodoService) {}
  ngOnInit(): void  {
    
     // Service qui retourne les données contunu dans le tbleau
    this.tabContact = this.todoService.Contacts();

    }
  }






