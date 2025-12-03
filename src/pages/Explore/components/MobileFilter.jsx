import { Filter, X, SlidersHorizontal } from "lucide-react";
import FilterSidebar from "./FilterSidebar/FilterSidebar";

const MobileFilterModal = ({ isOpen, onClose, ...filterProps }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Filter Panel */}
      <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-base-100 shadow-xl overflow-y-auto animate-slideIn">
        <div className="sticky top-0 bg-base-100 border-b border-base-300 p-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filters
          </h3>
          <button onClick={onClose} className="btn btn-ghost btn-circle">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <FilterSidebar {...filterProps} />
          <div className="sticky bottom-0 bg-base-100 border-t border-base-300 p-4 mt-6">
            <button onClick={onClose} className="btn btn-primary w-full">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterModal;
