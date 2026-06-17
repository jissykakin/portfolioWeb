export default function ButtonPrincipal({
  href = "#",
  children = "Click Me",
  className = "",
  ...props
}) {
  return (
    <a
      href={href}
      className={`bg-primary text-white text-md sm:text-lg uppercase font-medium font-poppins px-6 py-2 border-b-2 border-b-primary-shadow 
        transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}