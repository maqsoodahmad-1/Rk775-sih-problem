import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavH = styled.nav`
background: yellow;
height: 100px;
lg:justify-between p-0.4
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;

`;

export const Nav1 = styled.nav`
background: Lightgreen;
height: 85px;
lg:justify-between p-0.5
display: flex;
justify-content: space-between;
p=20;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;

`;


export const Nav2 = styled.nav`
background: lightgreen;
height: 50px;
lg:justify-between p-0.5
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;

`;
export const NavN = styled.nav`
background: orange;
height: 30px;
display: flex;
lg:justify-between p-6
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;

`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #4d4dff;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
