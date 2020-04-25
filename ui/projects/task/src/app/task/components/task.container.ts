import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-container',
  template: `
    <app-task>
      <app-task-form (taskAdded)="addTask($event)"></app-task-form>
      <app-tasks [tasks]="tasks"></app-tasks>
    </app-task>
  `
})
export class TaskContainer {
  tasks: { name: string }[] = [];

  addTask(task: { name: string }) {
    this.tasks = [...this.tasks, task];
  }
}
