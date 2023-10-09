import { makeAutoObservable } from 'mobx';

export type TaskType = {
  title: string;
  status: 'awaiting' | 'in progress' | 'complite';
  description?: string;
  createAt: Date;
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
const TodoStore = new ToDoStore();
export default TodoStore;
