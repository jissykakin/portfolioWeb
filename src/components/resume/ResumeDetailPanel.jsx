import { useResume } from "../../context/ResumeContext";
import { motion } from "framer-motion";

const ResumeDetailPanel = () => {
  const { selectedItem } = useResume();

  if (!selectedItem) {
    return (
      <div className="p-6 bg-white border border-gray-100 rounded-md">
        <p className="text-sm text-gray-500">Selecciona un año en la línea de tiempo para ver detalles.</p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      className="p-6 bg-white border border-gray-100 rounded-md"
    >
      <h4 className="text-lg font-bold text-orange-600 mb-1">{selectedItem.title}</h4>
      <p className="text-sm text-gray-700 mb-2">{selectedItem.institution}</p>
      <p className="text-xs text-gray-500 mb-4">{selectedItem.description}</p>

      {selectedItem.skills?.length > 0 && (
        <>
          <h5 className="text-sm font-semibold text-gray-800 mb-2">Skills</h5>
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedItem.skills.map((s, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-600">{s}</span>
            ))}
          </div>
        </>
      )}

      {selectedItem.certificate && (
        <div className="mt-2 border-t pt-3">
          <a href={selectedItem.certificate} target="_blank" rel="noreferrer" className="text-sm text-orange-600 underline">
            Descargar certificado
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ResumeDetailPanel;