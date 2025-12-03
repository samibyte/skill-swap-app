// components/FaqItem.jsx
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqItem = ({ question, answer, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-base-300/50 rounded-xl overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-base-200/50 transition-colors"
      >
        <span className="font-medium text-base-content">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-base-content/60" />
        ) : (
          <ChevronDown className="w-5 h-5 text-base-content/60" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-base-200/30 border-t border-base-300/30">
          <p className="text-base-content/70">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
