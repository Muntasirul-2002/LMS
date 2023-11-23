"use client";
import React, { useState } from "react";

function CategoryFilter({ selectedCategory }) {
  const [activeIndex, setActiveIndex] = useState();
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "React.js",
      value: "reactjs",
    },
    {
      id: 3,
      name: "Tailwindcss",
      value: "tailwindcss",
    },
    {
      id: 4,
      name: "Node.js",
      value: "nodejs",
    },
    {
      id: 5,
      name: "JavaScript",
      value: "javascript",
    },
    {
      id: 6,
      name: "Python",
      value: "python",
    },
    {
      id: 7,
      name: "Git & Github",
      value: "git",
    },
  ];
  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveIndex(index);
            selectedCategory(item.value);
          }}
          className={`border p-2 px-4 text-sm rounded-md 
        
        hover:border-purple-800
        font-semibold ${
          activeIndex == index
            ? "border-purple-800 bg-purple-50 text-purple-900"
            : null
        }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
