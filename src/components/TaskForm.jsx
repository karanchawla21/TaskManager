import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";
import BaseModel from "./BaseModel";

const TaskForm = ({ setTask }) => {
  const [isOpen, setIsOpen] = useState(false);

  //Shortcut trick for handling form
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClosed = () => {
    setIsOpen(false);
  };

  const checkedTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.task==="" || taskData.tags.length === 0){
      return;
    }

    setTask((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // }

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // }

  return (
    <div>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskData.task}
            className="task_input"
            placeholder="Enter your task"
            name="task"
            onChange={handleChange}
          />
          <div className="task_form_bottom_line">
            <div>
              <Tag
                tagName="HTML"
                selectTag={selectTag}
                selected={checkedTag("HTML")}
              />
              <Tag
                tagName="CSS"
                selectTag={selectTag}
                selected={checkedTag("CSS")}
              />
              <Tag
                tagName="JavaScript"
                selectTag={selectTag}
                selected={checkedTag("JavaScript")}
              />
              <Tag
                tagName="ReactJS"
                selectTag={selectTag}
                selected={checkedTag("ReactJS")}
              />
            </div>
            <div>
              <select
                className="task_status"
                value={taskData.status}
                name="status"
                onChange={handleChange}
              >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>

              <button type="submit" className="task_submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TaskForm;
