import React from 'react';
import "./TaskCard.css";
import Tag from './Tag';

const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>

        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
                {
                  tags.map((tag,index) => {
                    return <Tag key={index} tagName={tag} selected />; // Added return statement here
                  })
                }
            </div>
            <div className="task_delete" onClick={()=>handleDelete(index)}>
                ❌
            </div>
        </div>
    </article>
  )
}

export default TaskCard;
