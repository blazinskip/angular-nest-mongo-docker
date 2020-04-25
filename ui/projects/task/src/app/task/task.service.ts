import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {
  private static resourceURL = 'api/tasks';

  constructor(private readonly httpClient: HttpClient) {
  }

  create$(createTask: { name: string }) {
    return this.httpClient.post(TaskService.resourceURL, createTask);
  }

  findAll$(): Observable<{ id: string, name: string }[]> {
    return this.httpClient.get<{ id: string, name: string }[]>(TaskService.resourceURL);
  }
}
