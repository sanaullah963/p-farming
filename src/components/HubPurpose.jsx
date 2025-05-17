export default function HubPurpose() {
  return (
    <section className="py-16 bg-gray-100" id="hub-purpose">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
        {/* Left - Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">🌱 Purpose of This Hub</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to empower farmers and agriculture enthusiasts by providing accurate, accessible, and practical
            information. Whether you're starting out or an experienced grower, this hub is your trusted companion for learning
            new techniques, solving problems, and improving your yields.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Learn More
          </button>
        </div>

        {/* Right - Image */}
        <div>
          <img
            src="/about-hub.jpg" // You can replace this with your own image
            alt="Hub Purpose"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
