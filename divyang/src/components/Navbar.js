import React from "react";
import { FaHome,FaAmilia,FaAccessibleIcon,FaUserEdit,FaTabletAlt, FaCamera } from "react-icons/fa";
import { Nav2 ,NavLink,NavMenu}from "./NavbarElements";

function Navbar () {
return (
	<>
	
		
		<Nav2 class="container flex justify-around py-3 mx-auto bg-white bg-orange-400 "> 
		<NavMenu>
		<NavLink to="/home"><FaHome  style={{color: 'black', fontSize: '30px'}}/></NavLink>
    <NavLink to="/home">< FaAmilia style={{color: 'black', fontSize: '30px'}}/></NavLink>
    <NavLink to="/home">< FaAccessibleIcon style={{color: 'black', fontSize: '30px'}}/></NavLink>
	
    <NavLink to="/home"><FaUserEdit style={{color: 'black', fontSize: '30px'}}/></NavLink>
    <NavLink to="/home">< FaTabletAlt style={{color: 'black', fontSize: '30px'}}/></NavLink>
    <NavLink to="/home">< FaCamera style={{color: 'black', fontSize: '30px'}}/></NavLink>
	</NavMenu>
    </Nav2>
		
		

	</>
);
};

export default Navbar;
