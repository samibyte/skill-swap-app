import { useState } from "react";
import { ChevronUp, ChevronDown, Sparkles } from "lucide-react";

const RatingSection = ({ minRating, onRatingChange }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center w-full mb-3 text-lg font-medium"
      >
        <span>Minimum Rating</span>
        {expanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {expanded && (
        <div className="space-y-3">
          {[0, 3, 3.5, 4, 4.5].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="rating"
                checked={minRating === rating}
                onChange={() => onRatingChange(rating)}
                className="radio radio-primary radio-sm"
              />
              <span className="text-base-content group-hover:text-primary transition-colors">
                {rating === 0 ? "Any Rating" : `${rating}+ Stars`}
              </span>
              {rating > 0 && (
                <div className="flex ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-base-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingSection;
