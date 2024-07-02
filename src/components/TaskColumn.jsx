import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({columnName, tasks, status, handleDelete}) => {
  return (
    <section className="task_column">
        <h2>{columnName}</h2>
        {
          tasks.map((task,index) => {
            if (task.status === status) {
              return <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}/>;
            }
            return null; // Return null if condition is not met
          })
        }
    </section>
  );
}

export default TaskColumn;
