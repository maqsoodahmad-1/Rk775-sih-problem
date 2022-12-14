import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavH,NavMenu}from "./NavbarElements";
//import Img from  './congrats.png';
function Header()

{

  return( 
    <NavH><NavMenu>
  
  <div class="flex items-center ">
    <h3 class="text-6xl font-semibold  text-black-500 ">सहदिव्या</h3>
  </div>

  <div class="items-center hidden space-x-8 lg:flex">
    <NavLink to="/login">LOGIN </NavLink>|
   
    <NavLink to="/signup">REGISTER</NavLink>
  </div>

  <div class="flex items-center space-x-2">
    <NavLink to="/profile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-black-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  </NavLink>
  <NavLink to="/profile">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 text-black-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
    </NavLink>
    <NavLink to="/profile" class="p-2 rounded-full bg-blue-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-black-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </NavLink>
  </div></NavMenu>
</NavH>
  

  
  );
  }
  export default Header;