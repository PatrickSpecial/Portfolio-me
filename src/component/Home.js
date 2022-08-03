import React from 'react'
import { FaHome, FaChromecast, FaAddressBook, FaBiking, FaBookOpen } from "react-icons/fa";


function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500  w-96 h-full wh">  
    <div className="mr-4 py-5">
      <h1 className="ml-6 text-xl font-bold">HI, THERE</h1>
      <h1 className="ml-6 text-lg font-bold  text-yellow-500"><span className="text-white"> </span>I am Patrick Ubong Kingsley</h1>
      <p className="ml-6">Lorem Ipsum is simply dummy text of the printing <br></br> and typesetting 
        industry. Lorem Ipsum has been the <br></br> industry's standard dummy text
         ever since the 1500s, <br></br> when an unknown printer took a galley of type
         and<br></br> scrambled it to make a type specimen book.</p>
         <button className=" relative rounded ml-6 bg-yellow-600 w-32 text-white font-bold">
         <FaAddressBook  className="absolute mt-2 w-10 px-2  fill-white"/>
          <h1 className="mr-2 mt-1 text-lg">About</h1>
         </button>
    </div>
    </div>
  )
}

export default Home