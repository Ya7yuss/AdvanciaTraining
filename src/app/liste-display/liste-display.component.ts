import { Component, OnInit } from '@angular/core';
import { TodoSerService } from '../services/todo-ser.service';
import { ToDo } from '../Model/ToDo';

@Component({
  selector: 'app-liste-display',
  templateUrl: './liste-display.component.html',
  styleUrls: ['./liste-display.component.css']
})
export class ListeDisplayComponent implements OnInit {
  todos: ToDo[];
  constructor(private service: TodoSerService) { }
  
  ngOnInit() {
    this.todos = this.service.getTodo();
    console.log(this.todos);
  }

  deleteTodo(parm: ToDo){
    this.service.deleteTodo(parm);
  }

}
