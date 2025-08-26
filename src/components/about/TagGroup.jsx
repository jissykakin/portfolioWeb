const TagGroup = ({ title, items }) => (
  <div className="flex flex-col gap-2">
    <h3 className="text-xl font-black">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-block px-2 py-1 text-sm bg-primary text-white rounded-xl"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default TagGroup;