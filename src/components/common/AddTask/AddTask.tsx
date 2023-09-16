import { FC, memo } from 'react';

interface IAddTask {}
const AddTask: FC<IAddTask> = () => {
  return <div>AddTask</div>;
};
export default memo(AddTask);
