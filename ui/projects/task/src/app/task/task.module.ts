import { NgModule } from '@angular/core';
import { TaskContainer } from './components/task.container';
import { TaskComponent } from './components/task.component';
import { TaskFormComponent } from './components/task-form.component';
import { TasksComponent } from './components/tasks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule,ReactiveFormsModule],
  declarations: [TaskContainer, TaskComponent, TaskFormComponent, TasksComponent],
  exports: [TaskContainer],
  providers: [],
})
export class TaskModule {
}
