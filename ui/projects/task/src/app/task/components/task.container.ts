import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { startWith, switchMap } from 'rxjs/operators';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-task-container',
  template: `
    <app-task>
      <app-task-form (taskAdded)="addTask($event)"></app-task-form>
      <app-tasks [tasks]="(tasks$ | async)"></app-tasks>
    </app-task>
  `
})
export class TaskContainer {
  private readonly fetchTasksSubject = new ReplaySubject(1);

  tasks$ = this.fetchTasksSubject
    .asObservable()
    .pipe(
      switchMap(() => this.taskService.findAll$().pipe(startWith([]))),
    );

  constructor(private readonly taskService: TaskService) {
    this.fetchTasksSubject.next();
  }

  addTask(task: { name: string }) {
    this.taskService.create$(task)
      .subscribe(this.fetchTasksSubject);
  }
}
