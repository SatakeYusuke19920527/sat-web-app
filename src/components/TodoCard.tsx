import React from 'react';
// import { Task } from '../../models/task';
import TodoDeleteButton from './TodoDeleteButton';
import TodoEditButton from './TodoEditButton';

const TodoCard: React.FC<any> = ({
  id,
  title,
  description,
  dueDate,
  isCompleted,
}) => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="mt-1 text-sm line-clamp-3">{description}</div>
      </header>
      <div>
        <div className="text-sm">{dueDate}</div>
        <div className="flex justify-between items-center">
          <div
            className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm ${
              isCompleted ? `bg-green-500` : 'bg-red-500'
            }`}
          >
            {isCompleted ? 'Completed' : 'InCompleted'}
          </div>
          <div className="flex gap-4">
            <TodoEditButton id={id!} />
            <TodoDeleteButton id={id!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
