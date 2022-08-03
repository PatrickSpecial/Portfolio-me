import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Hamburger from 'hamburger-react';
import { FaHome, FaChromecast, FaAddressBook, FaBiking, FaBookOpen } from "react-icons/fa";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const menuItem = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome className="fill-white "/>,

  },
  {
    path: "/about",
    name: "About",
    icon: <FaChromecast  className="fill-white"/>,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: <FaBookOpen  className="fill-white"/>,
  },
  {
    path: "/hobbies",
    name: "Hobbies",
    icon: <FaBiking  className="fill-white"/>,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <FaAddressBook  className="fill-white"/>,
  },
];

export default function SidebarExample({children}) {
    const[isOpen, setIsOpen] = useState(false)
    
  return (
   <div className="flex">
    <div className={`bg-black h-screen max-h-full  p-4 pt-8 ${isOpen ? 'w-72' : 'w-36'} duration-1000 relative`}>
        <div className="flex py-2">
            {/* {isOpen ?
            <h1 className="text-white block  animate-pulse">Logo</h1>
        : <h1></h1>} */}
            <div>
            <Hamburger color="white" easing="ease-in" duration={0.8} toggled={isOpen} toggle={setIsOpen} />
            </div>
        </div>
        <div className="ml-12">
            {isOpen ?
        <div className="animate-pulse bg-pink-500 rounded-full bordered w-32 h-32
         object-center">
                {/* <h3 className="text-center py-5">Avatar</h3> */}
                <img
      src={require('../images/ub2.jpeg')}
      alt="Third slide"
      className="rounded-full w-32 h-32"
    />
            </div> 
            :
            <div></div>}
            {isOpen ?
            <h1 className="text-lg text-white font-bold not-italic 
            hover:italic mt-3">Patrick Ubong </h1>
            : 
            <h1></h1>}
            {isOpen ? <p className="text-sm text-white font-bold italic">Fullsatck Developer</p>
            : <p></p> }
            </div>
        {
            menuItem.map((item, index) => ( 
                <NavLink to={item.path} key={index} className="link no-underline list-none" activeclassName="active">
                    {isOpen ? <div className="absolute mt-3 ml-4 text-2xl ">{item.icon}</div>
                    : <div  className=" mt-3  text-5xl">{item.icon}</div>}
                    {isOpen ? <div className=" relative text-center px-1 py-3 text-white list-none">{item.name}</div>
                    : <div></div> }
                </NavLink>
            ))
        }
    </div>
    <main>{children}</main>
   </div>
  );
}
