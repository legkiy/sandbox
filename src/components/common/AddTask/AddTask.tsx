'use client';
import { FC, memo, useMemo, useState, MouseEvent, useId } from 'react';
import style from './AddTask.module.scss';
import { observer } from 'mobx-react-lite';
import ToDoStore, { TaskType } from '@/storeMobx/ToDoStore';
import { Button, Input, TextArea } from '@/components/common';
import { useForm } from 'react-hook-form';

interface IAddTask {
  onAddTask?: () => void;
}

const AddTask: FC<IAddTask> = observer(({ onAddTask }) => {
  const { setTasks, tasks } = ToDoStore;
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  const toDoId = useId();

  const { register, handleSubmit } = useForm<TaskType>({
    defaultValues: {
      status: 'awaiting',
    },
  });

  const newTask: TaskType = useMemo(
    () => ({
      title: taskTitle,
      status: 'awaiting',
      createAt: new Date(),
      id: toDoId,
    }),
    [taskTitle, toDoId],
  );

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    if (!taskTitle) return;
    setTasks(newTask);
    setTaskTitle('');
    setTaskDesc('');

    onAddTask && onAddTask();
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
      <TextArea
        rows={4}
        title="Descriotion"
        value={taskDesc}
        onChange={({ target }) => setTaskDesc(target.value)}
      />
      <Button type="submit" onClick={e => onSubmit(e)}>
        add task
      </Button>
    </form>
  );
});
export default memo(AddTask);
