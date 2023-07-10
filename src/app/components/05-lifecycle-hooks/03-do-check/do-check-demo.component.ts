import { Component, type OnInit } from '@angular/core';
import type { TaskModel } from './task.model';
import { DoCheckItemComponent } from './do-check-item/do-check-item.component';
import { DoCheckItemListComponent } from './do-check-item-list/do-check-item-list.component';

@Component({
  selector: 'app-do-check-demo',
  standalone: true,
  template: `
    <section>
      <h4>One Item:</h4>
      <app-do-check-item
        [item]="tasks[0]"
        (setPriority)="onSetPriority($event)"
        (completeAction)="onCompleteAction($event)"
        (clearAction)="onClearAction($event)"
      ></app-do-check-item>

      <h4>List of Items:</h4>
      <app-do-check-item-list
        [tasks]="tasks"
        (remove)="onRemoveTask($event)"
        (setPriority)="onSetPriority($event)"
        (completeAction)="onCompleteAction($event)"
        (clearAction)="onClearAction($event)"
      >
      </app-do-check-item-list>
      <button class="btn btn-danger" (click)="onAddTask()">Add</button>
    </section>
  `,
  imports: [DoCheckItemComponent, DoCheckItemListComponent]
})
export class DoCheckDemoComponent implements OnInit {
  tasks: Array<TaskModel> = [];

  private responsibles: string[] = ['Andrey', 'Boris', 'Helen', 'Joe'];
  private actions: string[] = ['Estimate', 'Create', 'Delete', 'Implement', 'Deploy'];

  ngOnInit(): void {
    this.onAddTask();
  }

  onSetPriority(item: TaskModel): void {
    const index = this.tasks.indexOf(item);
    this.tasks[index].priority = true;
  }

  onCompleteAction(item: TaskModel): void {
    const index = this.tasks.indexOf(item);
    this.tasks[index].done = true;
  }

  onClearAction(item: TaskModel): void {
    const index = this.tasks.indexOf(item);
    delete this.tasks[index].action;
  }

  onAddTask(): void {
    this.tasks.push({
      responsible: this.getRandomItem(this.responsibles),
      action: this.getRandomItem(this.actions),
      done: false
    });
  }

  onRemoveTask(task: any): void {
    const pos = this.tasks.indexOf(task);
    this.tasks.splice(pos, 1);
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  private getRandomItem(array: string[]): string {
    const pos: number = this.getRandomInt(array.length - 1);
    return array[pos];
  }
}
