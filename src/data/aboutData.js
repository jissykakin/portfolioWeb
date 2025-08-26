import { FaBirthdayCake, FaCity, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const profile = {
  img: `${import.meta.env.VITE_BASE_URL}imgs/aboutphoto.svg`,
  name: "Jissy Merlano",
  title: "System Engineer",
  description:
    "Full Stack Developer | IT Coordinator | Graphic Design | Web Design UX/UI/Figma | Data Analytics",
  cvLink: "/docs/JissyMerlanoCV.pdf",
};

export const contactInfo = [
  { icon: FaPhoneAlt, text: "+57 300 8023042" },
  { icon: FaBirthdayCake, text: "Septiembre 1989" },
  { icon: FaEnvelope, text: "sicaji22@gmail.com" },
  { icon: FaCity, text: "Cartagena, Colombia" },
];

export const stats = [
  { number: "15+", label1: "Years", label2: "experience..." },
  { number: "10+", label1: "Projects", label2: "or implements..." },
];

export const texts = [
  {
    title: "Trayectoria Profesional",
    content:
      "Soy Ingeniera de Sistemas con especialización en Automatización y Control de Procesos Industriales y en Administración de Bases de Datos. A lo largo de mi carrera he participado en el análisis, diseño y desarrollo de soluciones tecnológicas orientadas a la optimización de procesos. Actualmente me desempeño como desarrolladora Full Stack, colaborando en proyectos que integran innovación, eficiencia y escalabilidad.",
  },
  {
    title: "Visión Profesional",
    content:
      "Mi objetivo es seguir consolidando mi experiencia en el desarrollo de software y gestión de proyectos tecnológicos, aplicando metodologías ágiles y prácticas modernas de ingeniería. Aspiro a continuar aprendiendo y aportando en equipos multidisciplinarios, liderando iniciativas que conecten la tecnología con la generación de valor real para las organizaciones y las personas.",
  },
];

export const hobbies = [
  "Auto aprendizaje",
  "Ver cine y series",
  "Leer",
  "Viajar",
  "Puzzles",
  "Correr",
  "Coser",
  "Anime",
  "Yoga",
  "Manualidades",
  "Familia",
];

export const softSkills = [
  "Creativity",
  "Assertive communication",
  "Critical thinking",
  "Problem solving",
  "Emotional intelligence",
  "Leadership",
  "Adaptability to change",
  "TeamWork",
  "Intellectual curiosity",
  "Business acumen",
];