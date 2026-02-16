// import { useEffect, useRef } from "react";
// import TimelineItemVertical from "./TimelineItemVertical";
// import { useResume } from "../../context/ResumeContext";

// /**
//  * Vertical timeline:
//  * - scroll snap + overflow-y
//  * - IntersectionObserver para detectar qué item está en foco
//  */
// const ResumeTimelineVertical = ({ items = [] }) => {
//   const { setSelectedItem, selectedItem } = useResume();
//   const containerRef = useRef(null);
//   const itemRefs = useRef([]);

//   // limpiza del array entre renders
//   itemRefs.current = [];

//   // Añade ref
//   const setItemRef = (el) => {
//     if (el) itemRefs.current.push(el);
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container || items.length === 0) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const idx = Number(entry.target.dataset.index);
//             const item = items[idx];
//             if (item) setSelectedItem(item);
//           }
//         });
//       },
//       {
//         root: container,
//         rootMargin: "-30% 0px -30% 0px", // centra la detección en el centro del viewport del container
//         threshold: 0.5,
//       }
//     );

//     // observar
//     itemRefs.current.forEach((el) => observer.observe(el));

//     return () => {
//       observer.disconnect();
//     };
//   }, [items, setSelectedItem]);

//   const handleClick = (index) => {
//     const el = itemRefs.current[index];
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "center" });
//       setSelectedItem(items[index]);
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="relative overflow-y-auto h-[420px] md:h-[560px] pr-4 snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-300"
//     >
//       {/* Línea vertical decorativa */}
//     {/* <div className="hidden md:block absolute left-28 top-4 bottom-4 w-px bg-gray-200" /> */}

//       <div className="flex flex-col">
//         {items.map((item, idx) => (
//           <div
//             key={item.id}
//             data-index={idx}
//             ref={setItemRef}
//             className="snap-center"
//           >
//             <TimelineItemVertical
//               item={item}
//               index={idx}
//               isActive={selectedItem?.id === item.id}
//               onClick={() => handleClick(idx)}
//             />
//           </div>
//         ))}
//       </div>

      
//     </div>
//   );
// };

// export default ResumeTimelineVertical;


import { useState, useRef, useEffect } from "react";
import TimelineItemVertical from "./TimelineItemVertical";
import TimelineDetails from "./TimelineDetails";

const ResumeTimelineVertical = ({ items = [] }) => {
  const [selectedItem, setSelectedItem] = useState(items[0] || null);
  const containerRef = useRef(null);

  // Detecta qué ítem está más visible al hacer scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const elements = container.querySelectorAll(".timeline-item");
      let closest = null;
      let closestDist = Infinity;
      elements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const dist = Math.abs(
          rect.top - containerRect.top - containerRect.height / 2
        );
        if (dist < closestDist) {
          closestDist = dist;
          closest = items[idx];
        }
      });
      if (closest) setSelectedItem(closest);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div className="flex flex-col md:flex-row gap-2 w-full">
      {/* 60% timeline */}
      <div
        ref={containerRef}
        className="relative md:w-2/3 overflow-y-auto pr-7 snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-400"
      >
        {/* Línea central */}
       
        <div className="flex flex-col gap-10 py-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="timeline-item snap-center"
            >
              <TimelineItemVertical
                item={item}
                isActive={selectedItem?.id === item.id}
                onClick={() => setSelectedItem(item)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 40% detalle */}
      <div className="w-full md:w-1/3 px-2 flex items-top justify-center">
        {selectedItem ?  <TimelineDetails item={selectedItem} />
          
         : (
          <div className="text-gray-400 italic">Select an item to see details</div>
        )}
      </div>
    </div>
  );
};

export default ResumeTimelineVertical;