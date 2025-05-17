"use client";

import { useState } from "react";
import farmingGuides from "@/data/farmingGuides";
import FarmingFilters from "@/components/FarmingFilters";
import FarmingGuideGrid from "@/components/FarmingGuideGrid";
import GuideModal from "@/components/GuideModal";

import FarmingGuides from "@/components/FarmingGuides";

import Banner from "@/components/Banner";
export default function FarmingGuidesPage() {
  const [filters, setFilters] = useState({
    cropType: "",
    season: "",
    method: "",
  });
  const [selectedGuide, setSelectedGuide] = useState(null);

  const onFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredGuides = farmingGuides.filter((guide) => {
    return (
      (!filters.cropType || guide.cropType === filters.cropType) &&
      (!filters.season || guide.season === filters.season) &&
      (!filters.method || guide.method === filters.method)
    );
  });
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Banner image={"/banner1.jpg"} />
      <FarmingGuides />
      <div className="mt-12">
        <h1 className="text-3xl font-bold mb-6">📚 Farming Guides</h1>
        <FarmingFilters filters={filters} onFilterChange={onFilterChange} />
        <FarmingGuideGrid guides={filteredGuides} onSelect={setSelectedGuide} />
        <GuideModal
          guide={selectedGuide}
          onClose={() => setSelectedGuide(null)}
        />
      </div>
    </div>
  );
}
