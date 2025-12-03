const ResultsHeader = ({ filteredSkills, searchQuery, sortBy }) => {
  return (
    <div className="flex justify-between items-center mb-6" data-aos="fade-up">
      <div>
        <h2 className="text-2xl font-semibold">
          Available Skills
          {filteredSkills.length > 0 && (
            <span className="ml-2 text-lg font-normal text-base-content/60">
              ({filteredSkills.length}{" "}
              {filteredSkills.length === 1 ? "result" : "results"})
            </span>
          )}
        </h2>
        {searchQuery && (
          <p className="text-base-content/60 mt-1">
            Searching for: "{searchQuery}"
          </p>
        )}
      </div>
      <div className="text-sm text-base-content/60">
        Sorted by:{" "}
        <span className="font-medium capitalize">
          {sortBy.replace("-", " ")}
        </span>
      </div>
    </div>
  );
};

export default ResultsHeader;
