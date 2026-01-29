import { useState } from 'react';

export interface EquipmentFiltersProps {
  categories: string[];
  onChange: (filters: {
    q: string;
    category: string[];
    available: boolean;
    minPrice: string;
    maxPrice: string;
  }) => void;
}

export default function EquipmentFilters({ categories, onChange }: EquipmentFiltersProps) {
  const [q, setQ] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [available, setAvailable] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  function handleCategory(cat: string) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function handleApply() {
    onChange({ q, category: selectedCategories, available, minPrice, maxPrice });
  }

  return (
    <div className="glass-card p-6 rounded-xl space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategory(cat)}
                className="rounded border-white/20 bg-white/5 text-primary focus:ring-primary h-4 w-4"
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 pt-6">
        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Availability</h3>
        <label className="flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
          <input
            type="checkbox"
            checked={available}
            onChange={() => setAvailable((v) => !v)}
            className="rounded border-white/20 bg-white/5 text-primary focus:ring-primary h-4 w-4"
          />
          <span>Available Now</span>
        </label>
      </div>
      <div className="border-t border-white/10 pt-6">
        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Price Range</h3>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-20 px-2 py-1 rounded bg-white/5 border border-white/10 text-white"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-20 px-2 py-1 rounded bg-white/5 border border-white/10 text-white"
          />
        </div>
      </div>
      <button
        className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition"
        onClick={handleApply}
      >
        Apply Filters
      </button>
    </div>
  );
}
