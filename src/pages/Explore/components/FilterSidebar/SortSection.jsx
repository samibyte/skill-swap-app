const SortSection = ({ sortBy, onSortChange }) => {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-3">Sort By</h4>
      <div className="space-y-2">
        {["newest", "rating", "price-low", "price-high", "name"].map(
          (option) => (
            <label
              key={option}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="sort"
                checked={sortBy === option}
                onChange={() => onSortChange(option)}
                className="radio radio-primary radio-sm"
              />
              <span className="text-base-content group-hover:text-primary transition-colors capitalize">
                {option.replace("-", " ")}
              </span>
            </label>
          )
        )}
      </div>
    </div>
  );
};

export default SortSection;
