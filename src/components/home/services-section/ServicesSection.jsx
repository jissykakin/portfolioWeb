import { FaDesktop, FaCode, FaPaintBrush, FaChartLine } from "react-icons/fa";
import SideTag from "../../common/SideTag";
import FloatingButton from "../../common/FloatingButton";
import services from "../../../data/servicesData";
import ServiceGrid from "./ServiceGrid";





export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-26 bg-graylight dark:bg-secondary">
        <div className="mx-auto flex flex-row gap-15 sm:gap-20  text-gray-800  ">
            {/* SideTag */}
            <div className="relative  sm:min-h-[500px] min-h-[400px] w-1/3 flex flex-col ">
                <SideTag label="Services" colorbg="bg-secondary" align="left" />
            </div>

            {/* Columna Derecha */}
            <div className="relative w-full md:w-2/3 space-y-8 px-5  sm:px-10 lg:pr-26 bg-graylight dark:bg-secondary  ">               
                    <h2 className="text-4xl w-full md:text-5xl font-bold  text-secondary dark:text-white leading-snug ">
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