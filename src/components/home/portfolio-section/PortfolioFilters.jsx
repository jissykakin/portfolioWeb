const filters = [
  "ALL",
  "APPLICATION WEB",
  "DATA ANALYTICS",
  "WEB DESIGN",
  "UX/UI DESIGN",
  "GRAPHIC DESIGN",
];

export default function PortfolioFilters({ selected, onSelect }) {
  return (
    <div className="relative z-10 w-[55%] py-16 top-[80px] bg-white shadow-md">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`w-full px-8 py-3 text-center text-black font-medium
             hover:bg-graylight hover:text-primary  transition  ${
            selected === filter ? "bg-primary text-white transition delay-150 duration: 100 ease-in-out"  : ""
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}