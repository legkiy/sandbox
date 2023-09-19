'use client';
import { FC, memo, useMemo, useState, MouseEvent } from 'react';
import style from './AddTask.module.scss';
import { observer } from 'mobx-react-lite';
import ToDoStore, { TaskType } from '@/storeMobx/ToDoStore';
import { Button, Input, TextArea } from '@/components/common';
import { useForm } from 'react-hook-form';

interface IAddTask {}

const AddTask: FC<IAddTask> = observer(() => {
  const { addToDo, tasks } = ToDoStore;
  const [taskTitle, setTaskTitle] = useState('');

  const { register, handleSubmit } = useForm<TaskType>({
    defaultValues: {
      status: 'awaiting',
    },
  });

  const newTask: TaskType = useMemo(
    () => ({ title: taskTitle, status: 'awaiting' }),
    [taskTitle],
  );

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    addToDo(newTask);
  };

  return (
    <form
      className={style['add-todo-form']}
      onSubmit={() => {
        console.log('aas');
      }}
    >
      <Input
        type="text"
        value={taskTitle}
        onChange={({ target }) => setTaskTitle(target.value)}
      />
      <TextArea rows={4} />
      <Button type="submit" onClick={e => onSubmit(e)}>
        add task
      </Button>
    </form>
  );
});
export default memo(AddTask);
