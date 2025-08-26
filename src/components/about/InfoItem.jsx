const InfoItem = ({ icon: Icon, text }) => (
  <div className="flex gap-2 items-center text-lg italic">
    <Icon />
    <span>{text}</span>
  </div>
);

export default InfoItem;