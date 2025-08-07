import ResumeItem from "./ResumeItem";

function ResumeColumn({ items }) {
  return (
    <div className="order-3 md:order-4 mt-5 lg:mt-20 space-y-4">
      {items.map((item, index) => (
        <ResumeItem
          key={index}
          year={item.year}
          role={item.role}
          company={item.company}
        />
      ))}
    </div>
  );
}

export default ResumeColumn;