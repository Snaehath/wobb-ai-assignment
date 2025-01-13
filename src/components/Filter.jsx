import { useState } from "react";
const Filter = ({ setFilter }) => {
  const filters = [
    "All",
    "Fixed Pay",
    "Barter",
    "Products",
    "Fashion",
    "Technology",
    "Lifestyle",
  ];
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setFilter(filter);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedFilter === filter
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filter;
