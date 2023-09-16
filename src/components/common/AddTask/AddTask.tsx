'use client';
import { FC, memo, useMemo, useState } from 'react';
import style from './AddTask.module.scss';
import { observer } from 'mobx-react-lite';
import ToDoStore, { TaskType } from '@/storeMobx/ToDoStore';
import { Button } from '..';

interface IAddTask {}
const AddTask: FC<IAddTask> = observer(() => {
  const { addToDo, tasks } = ToDoStore;
  const [taskTitle, setTaskTitle] = useState('');

  const newTask: TaskType = useMemo(
    () => ({ title: taskTitle, status: 'awaiting' }),
    [taskTitle],
  );
  return (
    <div>
      <input
        onChange={({ target }) => setTaskTitle(target.value)}
        value={taskTitle}
      />
      <Button onClick={() => addToDo(newTask)}>add task</Button>
    </div>
  );
});
export default memo(AddTask);
