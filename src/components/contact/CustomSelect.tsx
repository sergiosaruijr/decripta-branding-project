import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  placeholder: string;
  onChange: (value: string) => void;
}

export function CustomSelect({
  label,
  options,
  placeholder,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  return (
    <div className="flex flex-col relative font-manrope w-full">
      <label className="text-white/60 text-[10px] tracking-[0.2em] mb-2 uppercase">
        {label}
      </label>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border-b border-white/20 py-3 text-white flex justify-between items-center cursor-pointer hover:border-white transition-colors"
      >
        <span className={!selectedLabel ? "text-white/20" : "text-white"}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          size={14}
        />
      </div>

      {isOpen && (
        <ul className="absolute z-50 w-full top-full bg-[#131313] border border-white/10 mt-1 py-2 shadow-2xl">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                setSelectedLabel(opt.label);
                setIsOpen(false);
                onChange(opt.value);
              }}
              className="px-4 py-3 hover:bg-white/5 cursor-pointer text-white text-sm transition-colors"
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
