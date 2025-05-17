import React from "react";

function OrganicRemedies() {
  return (
    <div>
      {/*  organie remedies Tips */}
      <section className="py-16 px-4 bg-green-50 mt-10 rounded-xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">
            Organic Remedies, Monitoring & Pest Management Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Organic Remedies */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                🌿 Organic Remedies
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Neem Oil Spray",
                    desc: "Effective against aphids, whiteflies, and mites. Apply every 7–10 days.",
                  },
                  {
                    title: "Soap Spray",
                    desc: "Made with mild soap and water. Best for soft-bodied insects.",
                  },
                  {
                    title: "Garlic-Chili Spray",
                    desc: "Natural repellent made from garlic and chili extract.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white shadow p-4 rounded-lg border-l-4 border-green-400"
                  >
                    <h4 className="text-xl font-semibold text-green-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 mt-1 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monitoring Tips */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-700">
                🔍 Monitoring Tips
              </h3>
              <div className="space-y-4">
                {[
                  "Check crops early in the morning for visible pest activity.",
                  "Use yellow sticky traps to attract flying insects.",
                  "Inspect underside of leaves and stem joints regularly.",
                  "Record observations and look for patterns.",
                  "Encourage natural predators like ladybugs or spiders.",
                ].map((tip, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-400"
                  >
                    <p className="text-gray-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Early Detection */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                🕵️‍♂️ Early Detection
              </h3>
              <div className="space-y-4">
                {[
                  "Look for discoloration, curling, or holes in leaves.",
                  "Identify unusual insect activity or residue on the plants.",
                  "Notice slow or stunted growth in affected crops.",
                  "Check soil and root zones for larvae or eggs.",
                ].map((tip, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-400"
                  >
                    <p className="text-gray-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Effective Treatment */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-700">
                💊 Effective Treatment
              </h3>
              <div className="space-y-4">
                {[
                  "Remove heavily infested parts of the plant immediately.",
                  "Use biopesticides like Bacillus thuringiensis (Bt) for caterpillars.",
                  "Apply horticultural oils to suffocate eggs and larvae.",
                  "Rotate crops to prevent pest buildup in the soil.",
                  "Combine organic sprays with physical barriers (e.g. nets).",
                ].map((tip, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg shadow border-l-4 border-red-400"
                  >
                    <p className="text-gray-700 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrganicRemedies;
