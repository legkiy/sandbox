'use client';

import { FC, memo } from 'react';
import { observer } from 'mobx-react-lite';
import ToDoStore, { TaskType } from '@/storeMobx/ToDoStore';

interface Props {}
const ToDoList: FC = observer((props: Props) => {
  const { tasks } = ToDoStore;
  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
});
export default memo(ToDoList);
