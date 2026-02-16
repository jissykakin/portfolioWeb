const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    
    <h2 className="font-ibm-plex-sans text-4xl font-bold mb-2">{ title}</h2>
    {subtitle && <p className="italic text-lg font-semibold">{subtitle}</p>}
   
  </div>
);

export default SectionTitle;