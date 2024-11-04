// import React from 'react'
// import { Navbar } from '@/';
// import { Nav } from './Navbar';

// export const Nav = () => {
//   return (
  
//       <nav className='absolute flex justify-between items-center px-20 p-10 bg-transparent text-white'>
//         <div className='flex flex-col'>
//         <h1 className='text-3xl'>Electronics, Fashion, Home Goods</h1>
//         <h4 className='text-sm text-center'>Vibrant Marketplace</h4>
//         </div>
          
      
//         <ul className='flex flex-row px-6 ml-20'>
//             <li className='text-[#BBA27B] p-4'>Shop now</li>
//             <li className='p-4'>Deals</li>
//             <li className='p-4'>Categories</li>
//             <li className='p-4'>About Us</li>
//             <li className='p-4'>Contact</li>
//             <li className='flex boder bg-[#BBA27B] text-gray-900 rounded px-4 py-2 p-4 items-center'>Get Started</li>
//           </ul>
      
//       </nav>
    
//   )
// }
// import React from 'react'

// function Navbar() {
//     return (
  
//                <nav className='absolute flex justify-between items-center px-20 p-10 bg-transparent text-white'>
//                  <div className='flex flex-col'>
//                  <h1 className='text-3xl'>Electronics, Fashion, Home Goods</h1>
//                  <h4 className='text-sm text-center'>Vibrant Marketplace</h4>
//                  </div>
                  
              
//                  <ul className='flex flex-row px-6 ml-20'>
//                      <li className='text-[#BBA27B] p-4'>Shop now</li>
//                      <li className='p-4'>Deals</li>
//                      <li className='p-4'>Categories</li>
//                     <li className='p-4'>About Us</li>
//                      <li className='p-4'>Contact</li>
//                     <li className='flex boder bg-[#BBA27B] text-gray-900 rounded px-4 py-2 p-4 items-center'>Get Started</li>
//                    </ul>
              
//                </nav>
            
//            )
//   }
  
//   export default Navbar;
  

// Navbar.js
// import React from 'react';

// function Navbar() {
//   return (
//     <nav className='absolute flex justify-between items-center px-20 p-10 bg-transparent text-white'>
//                  <div className='flex flex-col'>
//                   <h1 className='text-3xl'>Electronics, Fashion, Home Goods</h1>
//                   <h4 className='text-sm text-center'>Vibrant Marketplace</h4>
//                   </div>
                  
              
//                         <li className='text-[#BBA27B] p-4'>Shop now</li>
//                       <li className='p-4'>Deals</li>
//                       <li className='p-4'>Categories</li>
//                      <li className='p-4'>About Us</li>
//                       <li className='p-4'>Contact</li>
//                      <li className='flex boder bg-[#BBA27B] text-gray-900 rounded px-4 py-2 p-4 items-center'>Get Started</li>
//                     </ul>
              
//                 </nav>
            
//   );
// }

// export default Navbar;  // Default export

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className='absolute flex justify-between items-center px-20 p-10 bg-transparent text-white'>
//       <div className='flex flex-col'>
//         <h1 className='text-3xl'>Electronics, Fashion, Home Goods</h1>
//         <h4 className='text-sm text-center'>Vibrant Marketplace</h4>
//       </div>
      
//       <ul className='flex flex-row px-6 ml-20'>
//         <li className='text-[#BBA27B] p-4'>Shop now</li>
//         <li className='p-4'>Deals</li>
//         <li className='p-4'>Categories</li>
//         <li className='p-4'>About Us</li>
//         <li className='p-4'>Contact</li>
//         <li className='flex border bg-[#BBA27B] text-gray-900 rounded px-4 py-2 items-center'>Get Started</li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// src/app/components/Navbar.tsx or src/app/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center p-4 bg-transparent text-white z-10">
      <div className="flex flex-col">
        <h1 className="text-3xl">Electronics, Fashion, Home Goods</h1>
        <h4 className="text-sm text-center">Vibrant Marketplace</h4>
      </div>
      <ul className="flex space-x-4">
        <li className="text-[#BBA27B]">Shop now</li>
        <li>Deals</li>
        <li>Categories</li>
        <li>About Us</li>
        <li>Contact</li>
        <li className="bg-[#BBA27B] text-gray-900 rounded px-4 py-2">Get Started</li>
      </ul>
    </nav>
  );
};

export default Navbar;
