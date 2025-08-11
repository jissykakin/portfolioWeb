import dataProjects from "../../../data/dataProjects";
import FloatingButton from "../../common/FloatingButton";
import SideTag from "../../common/SideTag";
import PortfolioFilters from "./PortfolioFilters";
import PortfolioGallery from "./PortfolioGallery";
import { useState } from "react";


export default function PortfolioSection() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");


  const filteredProjects = (
    selectedFilter === "ALL"
      ? dataProjects
      : dataProjects.filter((p) => p.category === selectedFilter)
  )
  .sort(() => 0.5 - Math.random()) // orden aleatorio
  .slice(0, 6); // toma los primeros 6

  return (
    <section id="about" className="w-full min-h-screen py-26 dark:bg-secondary ">
       <div className="mx-auto flex flex-col-reverse lg:flex-row gap-5 lg:gap-12   text-gray-800 ">
        {/* Columna Izquierda */}
        <div className="relative w-full lg:w-2/3 flex md:flex-row lg:flex-col pl:0 lg:pl-30 ">
            <div className="container mx-auto px-2">
                <PortfolioGallery projects={filteredProjects} />
            </div>
             
        </div>
        {/* Columna Derecha */}
        <div className="relative w-full min-h-[400px] md:min-h-[500px] py-10 md:py-20 lg:w-1/3">
            <SideTag label="Portfolio" colorbg = "bg-graylight" colortext="text-secondary" position = 'right'/>
            <PortfolioFilters selected={selectedFilter} onSelect={setSelectedFilter} />            
        </div>
        
        
       
      </div>
      <div className="relative ">
        <FloatingButton position = "right" children = "READ MORE"></FloatingButton>
      </div>
     
    </section>
  );
}