import { FaDesktop, FaCode, FaPaintBrush, FaChartLine } from "react-icons/fa";
import SideTag from "../../common/SideTag";
import FloatingButton from "../../common/FloatingButton";
import services from "../../../data/servicesData";
import ServiceGrid from "./ServiceGrid";





export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-26 bg-graylight">
        <div className="mx-auto flex flex-col md:flex-row  gap-10  text-gray-800 ">
            {/* SideTag */}
            <div className="relative w-full md:w-1/3 flex flex-col ">
                <SideTag label="Services" colorbg="bg-secondary" align="left" />
            </div>

            {/* Columna Derecha */}
        <div className="relative w-full md:w-2/3 space-y-8  pr-36 mt-20">               
                <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-snug ">
                Provide Wide Range of <br />
                Digital Services
                </h2>

                {/* Grid de servicios */}
                <ServiceGrid services={services} />
           

            {/* Botón flotante */}
            <FloatingButton position="right" className="bottom-0 translate-y-full mt-8" />

        </div>
      
        </div>
       
     
    </section>
  );
}