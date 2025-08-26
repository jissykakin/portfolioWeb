import SocialLinks from "../../common/SocialLinks";
import NavContent from "./NavContent";

const base = import.meta.env.VITE_BASE_URL;

const SidebarContent = ({ isOpen , toggleSidebar}) => {
return (

     <>
      {/* Overlay oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-secondary
          flex flex-col 
          transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col justify-between h-full px-10 py-4 overflow-y-auto text-white bg-secondary dark:bg-white">
          <div className="text-2xl font-bold tracking-wide text-center mb-6">
            <img src={`${base}imgs/logo.png`} alt="logo" />            
          </div>

          {/* Nav */}
          <NavContent togglesidebar={toggleSidebar} />

          {/* Social links */}
          <SocialLinks layout="col" />

          <div className="text-sm font-ibm-plex-sans text-white mt-6">
            Copyright © {new Date().getFullYear()} Jissy Merlano, All right
            reserved.!
          </div>
        </div>
      </aside>
    </>

//     <aside
//     className={`fixed top-0 left-0 z-40 w-64 h-screen bg-secondary
//         flex flex-col 
//          transform transition-transform   duration-300 
//          ${isOpen ? "translate-x-0" : "-translate-x-full"}
//          sm:translate-x-0`}
//     aria-label="Sidebar"
//     >
//     <div className="flex flex-col justify-between  h-full px-10 py-4 overflow-y-auto text-white  bg-secondary dark:bg-white">
//        <div className="text-2xl font-bold tracking-wide text-center mb-6">
//             <span className="text-indigo-400">Jissy</span> Merlano
//         </div>
//        <NavContent togglesidebar={toggleSidebar}></NavContent>
        
// {/* social mlinks */}
//         <SocialLinks layout="col"/>

//         <div className="text-sm font-ibm-plex-sans text-white mt-6">
//         Copyright © {new Date().getFullYear()} Jissy Merlano, All right reserved.!
//         </div>
//     </div>
//     </aside>
);
}
export default SidebarContent;



// const SidebarContent = ({ isOpen, toggleSidebar }) => {
//   return (
//     <aside
//       className={`
//         fixed top-0 left-0 h-screen w-[280px] max-w-[300px]
//         bg-secondary text-white flex flex-col justify-between px-4 py-6
//         transform transition-transform duration-300 z-40
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0
//       `}
//     >
//       <div>
//         <h1>Bienvenido</h1>
//         {/* <SidebarLogo />
//         <SidebarMenu toggleSidebar={toggleSidebar} />
//         <SidebarSocials /> */}
//       </div>
//       {/* <SidebarFooter /> */}
//     </aside>
//   );
// };

// export default SidebarContent;