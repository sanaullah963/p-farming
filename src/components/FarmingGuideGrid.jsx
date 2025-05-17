export default function FarmingGuideGrid({ guides, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {guides.map((guide) => (
        <div
          key={guide.id}
          className="border rounded-lg hover:shadow-lg transition cursor-pointer bg-white"
          onClick={() => onSelect(guide)}
        >
          {/* IMAGE */}
          <img
            src={guide.image}
            alt={guide.title}
            className="h-48 w-full object-cover rounded-t-lg"
          />

          {/* TEXT DETAILS */}
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">{guide.title}</h3>
            <p className="text-sm text-gray-600 mb-1">
              Crop: {guide.cropType}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Season: {guide.season}
            </p>
            <p className="text-sm text-gray-600">
              Method: {guide.method}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
