import { Component, OnInit } from '@angular/core';
import { ToDo } from '../Model/ToDo';
import { TodoSerService } from '../services/todo-ser.service';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-liste-form',
  templateUrl: './liste-form.component.html',
  styleUrls: ['./liste-form.component.css']
})
export class ListeFormComponent implements OnInit {

  day: string;
  task: string;

  constructor(private service: TodoSerService) { }

  ngOnInit() {
    this.day='';
    this.task='';
  }

  addTodo(){
    const todo = new ToDo(this.day,this.task);
    this.service.addTodoSer(todo);
    this.day='';
    this.task='';
  }

}
