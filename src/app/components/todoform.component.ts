import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  todoForm: FormGroup;
  taskArray: FormArray;
  titleCtrl: FormControl;
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

  removeTask (i) {
  }

  showValues () {
    console.info('form ', this.todoForm.value);
  }

  private createTodo ():FormGroup {
    return this.fb.group({
      title: this.fb.control('', [Validators.required]),
      tasks: this.fb.array([])
    })
  }

  private createTask(): FormGroup {
    return this.fb.group({
      description: this.fb.control('', [ Validators.required]),
      priority: this.fb.control(0)
    })
  }
}
