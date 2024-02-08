import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [inputTask, setInputTask] = useState("");
  const [inputCategory, setInputCategory] = useState(categories[0]);

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      text: inputTask,
      category: inputCategory,
    };

    onTaskFormSubmit(newTask);

    setInputTask(""); 
  }

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "text") {
      setInputTask(value);
    } else if (name === "category") {
      setInputCategory(value); 
    }
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={inputTask}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={inputCategory}
          onChange={handleChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;