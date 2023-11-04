import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css',
  ]
})
export class TasksComponent implements OnInit {
  //tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //this.tasks = this.taskService.getTasks();
  }

  createTask(): void {
    // Implemente a lógica para criar uma nova tarefa.
  }

  editTask(): void {
    // Implemente a lógica para editar a tarefa.
  }

  deleteTask(): void {
    // Implemente a lógica para excluir a tarefa.
  }
}
