const StatCard = ({ number, label1, label2 }) => (
  <div className="flex gap-2 items-center">
    <h3 className="text-5xl font-black">{number}</h3>
    <div className="flex flex-col text-sm font-bold italic">
      <p>{label1}</p>
      <p>{label2}</p>
    </div>
  </div>
);

export default StatCard;