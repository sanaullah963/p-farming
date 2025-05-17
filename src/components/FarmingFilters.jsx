export default function FarmingFilters({ filters, onFilterChange }) {
  const handleChange = (e) => {
    onFilterChange(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {["cropType", "season", "method"].map((name) => (
        <select
          key={name}
          name={name}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">All {name}</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Grains">Grains</option>
          <option value="Fruits">Fruits</option>
          <option value="Winter">Winter</option>
          <option value="Summer">Summer</option>
          <option value="Monsoon">Monsoon</option>
          <option value="Organic">Organic</option>
          <option value="Conventional">Conventional</option>
        </select>
      ))}
    </div>
  );
}
