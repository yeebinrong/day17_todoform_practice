import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../model';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  todoForm: FormGroup;
  taskArray: FormArray;
  titleCtrl: FormControl;
  
  get values(): Todo {
    const t: Todo = this.todoForm.value as Todo;
    t.tasks = t.tasks.map(v => {
      // @ts-ignore
      v.priority = parseInt(v.priority);
      return v;
    })
    return this.todoForm.value as Todo;
  }
  set todo(t: Todo) {
    // leave it
  }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.todoForm = this.createTodo()
    this.taskArray = this.todoForm.get('tasks') as FormArray;
    this.titleCtrl = this.todoForm.get('title') as FormControl; 
  }

  addTask () {
    const task = this.createTask();
    this.taskArray.push(task);
  }

  saveTask () {

  }

  removeTask (i: number) {
    this.taskArray.removeAt(i);
  }


  private createTodo ():FormGroup {
    return this.fb.group({
      title: this.fb.control('', [Validators.required]),
      tasks: this.fb.array([])
    })
  }

  private createTask(): FormGroup {
    return this.fb.group({
      description: this.fb.control('', [ Validators.required ]),
      priority: this.fb.control(0)
    })
  }
}
