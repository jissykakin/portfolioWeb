import { motion } from "framer-motion";

const TimelineDetails = ({ item }) => {
  if (!item) return null;

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 max-w-md"
    >
      <h2 className="text-2xl font-semibold mb-2 text-purple-600">{item.title}</h2>
      {item.institution && (
        <p className="text-gray-700 font-medium">{item.institution}</p>
      )}
      {item.period && (
        <p className="text-gray-500 italic mb-4">{item.period}</p>
      )}
      <p className="text-gray-700 leading-relaxed">{item.description}</p>

      {item.skills && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TimelineDetails;