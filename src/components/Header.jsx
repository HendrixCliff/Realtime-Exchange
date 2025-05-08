import { GiRamProfile} from 'react-icons/gi';
import { Link} from 'react-router-dom';
import { SiMailchimp} from 'react-icons/si';
import {MdOutlineConnectWithoutContact} from 'react-icons/md';
import { GiPowerLightning } from "react-icons/gi";


export default function Header() {
  return (
    <header className=" w-[99.5%] justify-between fixed flex z-10 h-[7em] max-md:h-[6em] mx-[.2em] bg-[#b498ff]">
     
      <Link to="/"><GiPowerLightning className=" flex max-md:hidden w-[70%] ml-[4em] mt-[.5em] text-[#f6ffe9]" size={110}/></Link>
      <Link to="/"><GiPowerLightning className="max-md:flex hidden ml-[.1em] mr-[4em] mt-[.5em] text-[#f6ffe9]" size={90}/></Link>
     <section className="flex max-md:hidden  gap-[4.5em]">
      <Link to="/"><h4 className="font-bold text-[#f3e9ff] mt-[.7em] "><MdOutlineConnectWithoutContact size={40}/>Contact Us</h4></Link>
      <Link to="/"><h4 className="font-bold text-[#f3e9ff] mt-[.7em] "><SiMailchimp size={40}/>Mail</h4></Link>
     <Link to="/"><h4 className="mr-[4em] text-[#f3e9ff] mt-[.7em] font-bold"><GiRamProfile size={40}/> Profile</h4></Link>
     </section>
     <section className="max-md:flex hidden gap-[1.5em]">
      <Link to="/"><h4 className="font-bold text-[#ffe6d3] mt-[.7em]"><MdOutlineConnectWithoutContact size={28}/>Contact Us</h4></Link>
      <Link to="/"><h4 className="font-bold text-[#ffe6d3] mt-[.7em]"><SiMailchimp size={28}/>Mail</h4></Link>
     <Link to="/"><h4 className="mr-[2em] text-[#ffe6d3] mt-[.7em] font-bold"><GiRamProfile size={28}/> Profile</h4></Link>
     </section>
     
    </header>
  );
}