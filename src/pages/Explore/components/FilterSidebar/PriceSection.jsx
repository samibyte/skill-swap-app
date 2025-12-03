import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const PriceSection = ({ priceRange, onPriceChange }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="mb-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center w-full mb-3 text-lg font-medium"
      >
        <span>Price Range</span>
        {expanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {expanded && (
        <div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm">$0</span>
              <span className="text-sm font-medium">
                Up to ${priceRange.max}/hr
              </span>
              <span className="text-sm">$200</span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange.max}
              onChange={onPriceChange}
              className="range range-primary range-sm"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Min: $0/hr</span>
            <span className="font-medium text-primary">
              Max: ${priceRange.max}/hr
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceSection;
