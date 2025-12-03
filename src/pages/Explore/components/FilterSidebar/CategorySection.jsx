import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const CategorySection = ({
  categories,
  skills,
  selectedCategories,
  onCategoryToggle,
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center w-full mb-3 text-lg font-medium"
      >
        <span>Categories</span>
        {expanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {expanded && (
        <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryToggle(category)}
                className="checkbox checkbox-primary checkbox-sm"
              />
              <span className="text-base-content group-hover:text-primary transition-colors">
                {category}
              </span>
              <span className="ml-auto text-sm text-base-content/60">
                ({skills.filter((s) => s.category === category).length})
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySection;
