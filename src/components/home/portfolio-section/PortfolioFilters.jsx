const filters = [
  "ALL",
  "WEB APPLICATIONS",
  "DATA ANALYTICS",
  "SOFTWARE DEVELOPMENT",
  "UX/UI DESIGN",
  "GRAPHIC DESIGN",
];

export default function PortfolioFilters({ selected, onSelect }) {
  return (
    <div className="relative z-10 w-[70%] lg:w-[50%] py:0 lg:py-16  top-[80px] right-0 lg:right-4 ml-5 lg:ml-0 bg-white shadow-md">
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 ">
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
    </div>
  );
}
