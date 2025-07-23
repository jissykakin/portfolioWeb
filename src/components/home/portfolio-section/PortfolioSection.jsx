import FloatingButton from "../../common/FloatingButton";
import SideTag from "../../common/SideTag";
import PortfolioFilters from "./PortfolioFilters";
import PortfolioGallery from "./PortfolioGallery";
import { useState } from "react";

const sampleProjects = [
  {
    title: "Visual Design",
    description: "Android App UI design Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. ",
    image: "imgs/portfolio/project1.jpg",
    tags: ["React", "Typescript", "TailwindCSS", "Figma"],
    category: "APPLICATION WEB",
  },
  {
    title: "Visual Design",
    description: "Android App UI design Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. ",
    image: "imgs/portfolio/project1.jpg",
    tags: ["React", "Typescript", "TailwindCSS", "Figma"],
    category: "APPLICATION WEB",
  },
  {
    title: "Visual Design",
    description: "Android App UI design Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. ",
    image: "imgs/portfolio/project1.jpg",
    tags: ["React", "Typescript", "TailwindCSS", "Figma"],
    category: "WEB DESIGN",
  },
  // Agrega más proyectos según necesidad
];

export default function PortfolioSection() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  const filteredProjects =
    selectedFilter === "ALL"
      ? sampleProjects
      : sampleProjects.filter((p) => p.category === selectedFilter);

  return (
    <section id="about" className="w-full min-h-screen py-26">
       <div className="mx-auto   flex flex-col md:flex-row  gap-10  text-gray-800 ">
        {/* Columna Izquierda */}
        <div className="relative w-full md:w-2/3 flex flex-col pl-36">
            <div className="container mx-auto px-6">
                <PortfolioGallery projects={filteredProjects} />
            </div>
            
        </div>
        {/* Columna Derecha */}
        <div className="relative w-full min-h-screen py-20 md:w-1/3  ">
            <SideTag label="Portfolio" colorbg = "bg-graylight" colortext="text-secondary" position = 'right'/>
            <PortfolioFilters selected={selectedFilter} onSelect={setSelectedFilter} />  
            <FloatingButton position = "right" children = "READ MORE"></FloatingButton>
        </div>
        
       
      </div>
     
    </section>
  );
}