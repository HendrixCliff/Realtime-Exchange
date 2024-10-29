import {SiWebmoney} from 'react-icons/si';
import { GiRamProfile} from 'react-icons/gi';
import { Link} from 'react-router-dom';
import { SiMailchimp} from 'react-icons/si';
import {MdOutlineConnectWithoutContact} from 'react-icons/md';


export default function Header() {
  return (
    <header className=" w-[99%] justify-between fixed flex z-10 h-[7em] max-md:h-[6em] mx-[.2em] bg-[#ff72dc]">
     
      <Link to="/"><SiWebmoney className=" flex max-md:hidden ml-[4em] mt-[.5em] text-[#3e27ff]" size={90}/></Link>
      <Link to="/"><SiWebmoney className="max-md:flex hidden ml-[.1em] mr-[4em] mt-[.5em] text-[#3e27ff]" size={60}/></Link>
     <section className="flex max-md:hidden  gap-[4.5em]">
      <Link to="/"><h4 className="font-bold text-[#5543ff] mt-[.7em] animate-pulse"><MdOutlineConnectWithoutContact size={40}/>Contact Us</h4></Link>
      <Link to="/"><h4 className="font-bold text-[#5543ff] mt-[.7em] animate-pulse"><SiMailchimp size={40}/>Mail</h4></Link>
     <Link to="/"><h4 className="mr-[4em] text-[#5543ff] mt-[.7em] font-bold"><GiRamProfile size={40}/> Profile</h4></Link>
     </section>
     <section className="max-md:flex hidden gap-[1.5em]">
      <Link to="/"><h4 className="font-bold text-[#5543ff] mt-[.7em] animate-pulse"><MdOutlineConnectWithoutContact size={28}/>Contact Us</h4></Link>
      <Link to="/"><h4 className="font-bold text-[#5543ff] mt-[.7em] animate-pulse"><SiMailchimp size={28}/>Mail</h4></Link>
     <Link to="/"><h4 className="mr-[2em] text-[#5543ff] mt-[.7em] font-bold"><GiRamProfile size={28}/> Profile</h4></Link>
     </section>
     
    </header>
  );
}