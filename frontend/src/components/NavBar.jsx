import { Link } from 'react-router-dom';
import logoV from  '../utils/img/V.jpg';

export const NavBar = ({link}) => {
//   return (
//     <div>
//         <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </div>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <Link to={link}><img src={logoV} alt="" /></Link>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>
//     </div>
//   )
return (
  <div className='main-container w-[360px] h-[98.046px] relative mx-auto my-0'>
    <div className='w-[61.046px] h-[61.046px] bg-[url(../assets/images/6c5c2b2e-f96d-4086-a7ee-3ac5b4c16bd6.png)] bg-cover bg-no-repeat absolute top-0 left-[146.977px] z-[12]' />
    <div className='w-full h-[57.12%] bg-[#d5dfd7] rounded-tl-[16px] rounded-tr-[16px] rounded-br-none rounded-bl-none absolute top-[42.88%] left-0 overflow-hidden shadow-[0_-2px_4px_0_rgba(0,0,0,0.25)] z-[1]'>
      <div className='w-[291.5px] h-[27.5px] relative z-10 mt-[9px] mr-0 mb-0 ml-[30.067px]'>
        <div className='w-[8.23%] h-[87.27%] bg-[url(../assets/images/40984926-2365-418a-89f5-62e17aa703f7.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[2.84%] z-[2]' />
        <div className='w-[8.23%] h-[87.27%] bg-[url(../assets/images/8184c114-6179-457c-bde1-0a5ff37fe785.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[9.09%] left-[91.77%] overflow-hidden z-[7]' />
        <div className='w-[8.23%] h-[87.27%] bg-[url(../assets/images/d317806b-e240-4426-9c58-10aedf65f456.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[12.73%] left-0 overflow-hidden z-[6]' />
        <div className='w-[8.23%] h-[87.27%] bg-[url(../assets/images/5977c519-916a-4dd6-a023-2fd709dc2924.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[12.73%] left-[28.68%] overflow-hidden z-10' />
        <div className='w-[8.23%] h-[87.27%] absolute top-[12.73%] left-[61.48%] overflow-hidden z-[8]'>
          <div className='w-full h-full bg-[url(../assets/images/abb92588-75f2-4947-83c9-17ba2f72d923.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[9]' />
        </div>
      </div>
      <div className='flex w-[301px] h-[16.5px] justify-between items-center relative z-[11] mt-[-1px] mr-0 mb-0 ml-[25.067px]'>
        <span className="flex w-[34px] h-[16px] justify-center items-start shrink-0 font-['Roboto'] text-[12px] font-normal leading-[16px] text-[#677b58] tracking-[0.4px] relative text-center whitespace-nowrap z-[4]">
          Home
        </span>
        <span className="flex w-[52px] h-[11.5px] justify-center items-start shrink-0 font-['Roboto'] text-[12px] font-normal leading-[11.5px] text-[#677b58] tracking-[0.4px] relative text-center whitespace-nowrap z-[11]">
          Buscar
        </span>
        <span className="flex w-[48px] h-[16px] justify-center items-start shrink-0 font-['Roboto'] text-[12px] font-normal leading-[16px] text-[#677b58] tracking-[0.4px] relative text-center whitespace-nowrap z-[5]">
          Historial
        </span>
        <span className="flex w-[31px] h-[16px] justify-center items-start shrink-0 font-['Roboto'] text-[12px] font-normal leading-[16px] text-[#677b58] tracking-[0.4px] relative text-center whitespace-nowrap z-[3]">
          Perfil
        </span>
      </div>
    </div>
  </div>
);
}
