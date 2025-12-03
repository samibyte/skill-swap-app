import { Search } from "lucide-react";
import SkillCard from "../../../components/SkillCard";
import LoadingState from "./LoadingState";

const SkillsGrid = ({
  loading,
  filteredSkills,
  onClearFilters,
  searchQuery,
}) => {
  if (loading) {
    return <LoadingState />;
  }

  if (filteredSkills.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.skillId}
            data-aos="fade"
            data-aos-delay={(index % 3) * 100}
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="text-center py-16 bg-base-100/50 rounded-2xl border border-base-300"
      data-aos="fade-up"
    >
      <Search className="w-16 h-16 mx-auto mb-4 text-base-content/30" />
      <h3 className="text-2xl font-semibold mb-2">No skills found</h3>
      <p className="text-base-content/60 mb-6 max-w-md mx-auto">
        {searchQuery
          ? `No skills match "${searchQuery}". Try different keywords or clear your filters.`
          : "No skills match your current filters. Try adjusting them to see more results."}
      </p>
      <button onClick={onClearFilters} className="btn btn-primary">
        Clear All Filters
      </button>
    </div>
  );
};

export default SkillsGrid;
