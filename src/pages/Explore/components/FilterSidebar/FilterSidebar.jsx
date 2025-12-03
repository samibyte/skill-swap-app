import { Filter } from "lucide-react";
import SortSection from "./SortSection";
import CategorySection from "./CategorySection";
import PriceSection from "./PriceSection";
import RatingSection from "./RatingSection";

const FilterSidebar = ({
  categories,
  skills,
  selectedCategories,
  priceRange,
  minRating,
  sortBy,
  onCategoryToggle,
  onPriceChange,
  onRatingChange,
  onSortChange,
  onClearFilters,
}) => {
  return (
    <div className="bg-base-100/70 backdrop-blur-lg border border-base-300/50 rounded-2xl p-6 h-fit sticky top-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold poppins-font flex items-center gap-2">
          <Filter className="w-5 h-5 text-secondary" />
          Filters
        </h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-secondary hover:text-secondary/80 transition-colors font-medium"
        >
          Clear All
        </button>
      </div>

      <SortSection sortBy={sortBy} onSortChange={onSortChange} />
      <CategorySection
        categories={categories}
        skills={skills}
        selectedCategories={selectedCategories}
        onCategoryToggle={onCategoryToggle}
      />
      <PriceSection priceRange={priceRange} onPriceChange={onPriceChange} />
      <RatingSection minRating={minRating} onRatingChange={onRatingChange} />
    </div>
  );
};

export default FilterSidebar;
