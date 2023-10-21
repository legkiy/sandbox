'use client';
import { AddTask, Button, Modal } from '@/components/common';
import ToDoStore from '@/storeMobx/ToDoStore';
import { observer } from 'mobx-react-lite';
import { FC, useState } from 'react';
import style from './TodoPage.module.scss';
import { ToDoList } from '@/components';

const TodoPage: FC = observer(() => {
  const { tasks } = ToDoStore;
  const [openFormAddTask, setOpenFormAddTask] = useState(false);

  return (
    <div className={style['todo-page']}>
      <Button onClick={() => setOpenFormAddTask(true)}>+ task</Button>
      <ToDoList />
      <Modal
        opened={openFormAddTask}
        onClose={() => setOpenFormAddTask(false)}
        className={style['modal-ada-task']}
      >
        <AddTask onAddTask={() => setOpenFormAddTask(false)} />
      </Modal>
    </div>
  );
});
export default TodoPage;
