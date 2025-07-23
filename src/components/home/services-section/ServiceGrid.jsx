import React from "react";

export default function ServiceGrid({ services }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group relative p-8  shadow-md transition-all duration-300 ${
              service.highlight
                ? "bg-primary text-white border-primary hover:bg-primary hover:-translate-y-1 hover:scale-110"
                : "bg-white text-gray-800 hover:bg-primary hover:text-white hover:-translate-y-1 hover:scale-110"
            }`}
          >
             <div
              className={`mb-4 text-8xl transition-colors duration-300 ${
                service.highlight
                  ? "text-white group-hover:text-white"
                  : "text-primary group-hover:text-white"
              }`}
            >
              {React.createElement(service.icon, { size: 46 })}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
              {service.title}
            </h3>
            <p className="text-sm group-hover:text-white/80 ">
              {service.description}
            </p>
           {/*  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-t"></div> */}
           
           <div className="absolute top-0 left-0 h-full w-[4px] bg-primary" />

           
            <span className={`mt-6 inline-block text-sm transition-colors duration-300 group-hover:text-red-200 ${
                service.highlight
                 ? "text-white  group-hover:text-primary"
                 : "text-primary group-hover:text-white"
            }`}>
              Read More
            </span>

          </div>
        ))}
      </div>
    );
  }