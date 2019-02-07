import { Injectable } from '@angular/core';
import { WeekDay } from '@angular/common';
import { ToDo } from '../Model/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  task: ToDo[];
  constructor() { }
  addTodoSer(parm: ToDo){
    this.task.push(parm);
  }
  getTodo(){
    return this.task;
  }
  deleteTodo(parm: ToDo){
    const index = this.task.indexOf(parm);
    if (index<0){
      alert ('index not found')
    }
    else {
      this.task.splice(index,1);
    }
  }
}
