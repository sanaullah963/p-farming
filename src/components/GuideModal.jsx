export default function GuideModal({ guide, onClose }) {
  if (!guide) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-xl w-full relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-xl cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{guide.title}</h2>

        <div className="mb-6">
          <iframe
            src={guide.videoUrl}
            title={guide.title}
            className="w-full h-64 rounded"
            allowFullScreen
          ></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-3 text-green-700">Step-by-Step Instructions:</h3>
        {/* steps */}
        <ol className="space-y-4">
          {guide.steps.map((step, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-gray-50 p-4 rounded shadow-sm border-l-4 border-green-500"
            >
              <div className="text-green-600 font-bold text-lg">{i + 1}.</div>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
          {/* details */}
          {guide.tips && guide.tips.length > 0 && (
          <>
            <h3 className="text-xl font-semibold mt-4 mb-1 text-blue-700">Tips & Best Practices:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800 bg-blue-50 p-4 rounded shadow">
              {guide.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </>
        )}
        <button className="cursor-pointer mt-4 px-6 py-2 bg-gray-700 text-white rounded-lg right-2 hover:bg-green-800 transition" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
