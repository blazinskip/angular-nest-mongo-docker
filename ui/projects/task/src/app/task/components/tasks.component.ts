import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  template: `
    <section *ngIf="tasks.length">
      <ul>
        <li *ngFor="let task of tasks">{{task.name}}</li>
      </ul>
    </section>`
})

export class TasksComponent {
  @Input() tasks: { id: string, name: string; }[] = [];
}

