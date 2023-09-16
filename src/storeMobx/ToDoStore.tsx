import { makeAutoObservable } from 'mobx';

export type TaskType = {
  title: string;
  status: 'awaiting' | 'in progress' | 'complite';
  description?: string;
};

class ToDoStore {
  tasks: TaskType[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  addToDo = (task: TaskType) => {
    this.tasks = [task, ...this.tasks];
  };
}

export default new ToDoStore();
