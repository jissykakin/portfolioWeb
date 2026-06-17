const ResumeItem = ({ item, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center min-w-[140px] px-3 py-4 rounded-xl transition-all 
      ${isActive ? "bg-orange-100 border border-orange-400" : "hover:bg-gray-100"}`}
  >
    <span className="text-sm font-semibold text-gray-700">{item.period}</span>
    <span className="text-xs text-gray-500">{item.level}</span>
    <div
      className={`mt-2 h-2 w-2 rounded-full ${
        isActive ? "bg-orange-500" : "bg-gray-300"
      }`}
    />
  </button>
);

export default ResumeItem;