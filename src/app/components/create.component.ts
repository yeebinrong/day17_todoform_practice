import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDatabase } from '../todo.database';
import { TodoformComponent } from './todoform.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('myTodo')
  todoRef: TodoformComponent;
  constructor(private todoDB: TodoDatabase, private router: Router) { }

  ngOnInit(): void {
  }

  async add() {
    // generate new id for todo
    const id = uuidv4().toString().substring(0, 8);
    // get the new todo from the form
    const todo = this.todoRef.todoForm.value;
    // set the new id to the new todo
    todo.id = id;
    // save this to the database
    await this.todoDB.addTodo(todo);

    // navigate to /
    this.router.navigate(['/']);
  }
}
