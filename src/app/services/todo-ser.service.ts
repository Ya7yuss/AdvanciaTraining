import { Injectable } from '@angular/core';
import { ToDo } from '../Model/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoSerService {
  task: ToDo[];
  constructor() {
    this.task= [];
   }
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
