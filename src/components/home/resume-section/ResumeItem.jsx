const ResumeItem = ({ year, role, company }) => {
  return (
    <div className="mb-8">
      <p className="italic font-ibm-plex-sans text-lg text-gray-500 mb-2">- {year}</p>
      <div className="flex justify-between text-gray-800 font-poppins font-semibold text-3xl">
        <h3>{role}</h3>
        <span className="text-sm font-ibm-plex-sans text-gray-500">-{company}</span>
      </div>
    </div>
  );
};

export default ResumeItem;