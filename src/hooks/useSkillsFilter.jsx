import { useState, useEffect } from "react";

const useSkillsFilter = () => {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("newest");

  // Extract unique categories from skills data
  const categories = [
    ...new Set(skills.map((skill) => skill.category).filter(Boolean)),
  ];

  useEffect(() => {
    applyFilters();
  }, [searchQuery, selectedCategories, priceRange, minRating, sortBy, skills]);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const result = await fetch("/skillsListing.json");
      const skillsData = await result.json();
      setSkills(skillsData);
      setFilteredSkills(skillsData);
    } catch (error) {
      console.error("Error fetching skills:", error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...skills];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (skill) =>
          skill.skillName.toLowerCase().includes(query) ||
          skill.description.toLowerCase().includes(query) ||
          skill.providerName.toLowerCase().includes(query) ||
          skill.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((skill) =>
        selectedCategories.includes(skill.category)
      );
    }

    // Price filter
    filtered = filtered.filter(
      (skill) => skill.price >= priceRange.min && skill.price <= priceRange.max
    );

    // Rating filter
    if (minRating > 0) {
      filtered = filtered.filter((skill) => skill.rating >= minRating);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.skillName.localeCompare(b.skillName);
        default: // newest
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      }
    });

    setFilteredSkills(filtered);
  };

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange((prev) => ({ ...prev, max: value }));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 200 });
    setMinRating(0);
    setSortBy("newest");
  };

  return {
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
    setSelectedCategories,
    setPriceRange,
    setMinRating,
    setSortBy,
    fetchSkills,
    clearFilters,
    handleCategoryToggle,
    handlePriceChange,
  };
};

export default useSkillsFilter;