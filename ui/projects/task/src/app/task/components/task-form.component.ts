import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  template: `
    <form class="task-form" [formGroup]="taskForm" (ngSubmit)="addTask()">
      <label class="task-form__label" for="name">Task name</label>
      <input id="name" class="task-form__input" name="name" type="text" placeholder="Task name..." formControlName="name">
      <button class="task-form__button" type="submit">Add Task</button>
    </form>
  `,
  styles: [
    `
      .task-form {
        margin-bottom: 2rem;
      }

      .task-form__label {
        visibility: hidden;
      }

      .task-form__input {
        border: 1px solid transparent;
        border-radius: 3px;
        background: #e0dede;
        margin-right: 16px;
        padding: 8px 8px;
        font-size: 1rem;
        line-height: 1.2rem;
      }

      .task-form__button {
        transition: background-color 0.3s ease;

        background: #f1a4ee;
        border: 1px solid transparent;
        border-radius: 3px;
        padding: 8px 8px;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.2rem;
        color: #3e0688;
      }

      .task-form__button:hover {
        background: #f1a4ee87;
        cursor: pointer;
      }
    `
  ]
})

export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<{ name: string; }>();

  readonly taskForm = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  addTask(): void {
    const { valid, value } = this.taskForm;
    if (!valid) {
      return;
    }

    this.taskAdded.emit(value);
  }
}
