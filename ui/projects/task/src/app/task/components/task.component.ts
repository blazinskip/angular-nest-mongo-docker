import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <div class="tasks">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
      `
      .tasks {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        display: flex;
        width: 768px;
        margin: 100px auto 0;
      }
    `
  ]
})

export class TaskComponent {
}
