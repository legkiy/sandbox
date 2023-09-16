'use client';
import { AddTask } from '@/components/common';
import ToDoStore from '@/storeMobx/ToDoStore';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

const TodoPage: FC = observer(() => {
  const { tasks } = ToDoStore;

  return (
    <div>
      <AddTask />
      <ul>
        {tasks.map(({ title, description, status }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
});
export default TodoPage;
