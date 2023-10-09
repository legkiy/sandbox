'use client';
import { AddTask, Button } from '@/components/common';
import ToDoStore from '@/storeMobx/ToDoStore';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import style from './TodoPage.module.scss';
const TodoPage: FC = observer(() => {
  const { tasks } = ToDoStore;

  return (
    <div className={style['todo-page']}>
      <AddTask />
      <ul>
        {tasks.map(({ title, description, status }, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
});
export default TodoPage;
