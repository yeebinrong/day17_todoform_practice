import { Component, OnInit } from '@angular/core';
import { TodoSummary } from '../model';
import { TodoDatabase } from '../todo.database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private todoDB: TodoDatabase) { }
  todos: TodoSummary[] = []
  ngOnInit(): void {
    this.todoDB.getTodoSummary()
      .then(result => {
        this.todos = result;
        console.info(">>> summary: ",this.todos);
      })
  }

}
