import React, { useState } from "react";
import Task from "./Task";

function CategoryFilter({ categories, tasks, setFilteredTasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryClick(category) {
    setSelectedCategory(category);

    const filteredTasks = category === "All" ? tasks : tasks.filter(task => task.category === category);
    setFilteredTasks(filteredTasks);
  }

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;