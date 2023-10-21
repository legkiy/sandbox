import { makeAutoObservable } from 'mobx';

export type TaskType = {
  title: string;
  status: 'awaiting' | 'in progress' | 'complite';
  description?: string;
  createAt: Date;
  id: string
};

class ToDoStore {
  tasks: TaskType[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setTasks = (task: TaskType) => {
    this.tasks = [task, ...this.tasks];
  };
}
const TodoStore = new ToDoStore();
export default TodoStore;
