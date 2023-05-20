import React  from "react";
import LogoIcon from '../assets/logo.png'
const Logo = ()=>{
    return(
        <div className=" lg:mx-20 lg:my-14 sm:mx-5 sm:my-5 flex logo w-10 h-10">
           <a href="/" className="flex"> 
           <img src={LogoIcon} alt="logo" />
            <span className="py-1.5 px-2 text-xl text-white">BitGo</span>
           </a>
        </div>
    )
}

export default Logo;