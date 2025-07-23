import React from 'react'

export const BannerHome = () => {
  return (
    <div className="relative w-full flex mt-0 bg-secondary h-full ">
          <div className="flex justify-end items-end w-full">
              <img
              src="/imgs/jissy.png"
              alt="Jissy Merlano"            
              className=" max-w-sm md:max-w-sm lg:max-w-full h-full object-cover"
            />
          </div>
          
          {/* Caja flotante */}
          <div  className="absolute -bottom-6  lg:-left-26  bg-primary text-white  text-3xl  px-6 md:px-10 py-4 md:py-6 shadow-md text-center">
            <p  ><strong>Email:</strong> sicaji22@gmail.com</p>
            <p ><strong>Cel:</strong> 300 80 3043</p>
          </div>
        </div>
  )
}
