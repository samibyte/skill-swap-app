import { useState, useEffect } from "react";
import useAOS from "../../hooks/useAOS";
import useSkillsFilter from "../../hooks/useSkillsFilter";
import SearchBar from "./components/SearchBar";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import SkillsGrid from "./components/SkillsGrid";
import MobileFilterModal from "./components/MobileFilter";
import ResultsHeader from "./components/ResultsHeader";
import { SlidersHorizontal } from "lucide-react";

const ExploreSkills = () => {
  useAOS({ duration: 1200, once: true });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const {
    skills,
    filteredSkills,
    loading,
    searchQuery,
    selectedCategories,
    priceRange,
    minRating,
    sortBy,
    categories,
    setSearchQuery,
    setMinRating,
    setSortBy,
    fetchSkills,
    clearFilters,
    handleCategoryToggle,
    handlePriceChange,
  } = useSkillsFilter();

  useEffect(() => {
    fetchSkills();
  }, []);

  const activeFilterCount =
    selectedCategories.length +
    (minRating > 0 ? 1 : 0) +
    (priceRange.max < 200 ? 1 : 0);

  return (
    <div className="min-h-screen bg-linear-to-b from-base-100 to-base-200">
      <div className="max-w-11/12 md:max-w-9/12 mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10" data-aos="fade">
          <h1 className="text-4xl md:text-5xl font-bold poppins-font mb-4">
            Explore <span className="text-secondary">Skills</span>
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Discover and learn from talented experts across various fields. Find
            the perfect skill to learn or teach.
          </p>
        </div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="btn btn-outline w-full gap-2"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Show Filters
            {activeFilterCount > 0 && (
              <span className="badge badge-primary">{activeFilterCount}</span>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-1/4">
            <FilterSidebar
              categories={categories}
              skills={skills}
              selectedCategories={selectedCategories}
              priceRange={priceRange}
              minRating={minRating}
              sortBy={sortBy}
              onCategoryToggle={handleCategoryToggle}
              onPriceChange={handlePriceChange}
              onRatingChange={setMinRating}
              onSortChange={setSortBy}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Skills Grid */}
          <div className="lg:w-3/4">
            <ResultsHeader
              filteredSkills={filteredSkills}
              searchQuery={searchQuery}
              sortBy={sortBy}
            />

            <SkillsGrid
              loading={loading}
              filteredSkills={filteredSkills}
              onClearFilters={clearFilters}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      </div>

      <MobileFilterModal
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        categories={categories}
        skills={skills}
        selectedCategories={selectedCategories}
        priceRange={priceRange}
        minRating={minRating}
        sortBy={sortBy}
        onCategoryToggle={handleCategoryToggle}
        onPriceChange={handlePriceChange}
        onRatingChange={setMinRating}
        onSortChange={setSortBy}
        onClearFilters={clearFilters}
      />
    </div>
  );
};

export default ExploreSkills;
