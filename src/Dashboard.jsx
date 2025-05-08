 import {useDispatch } from 'react-redux'
 import { fetchData } from './redux/fetchData';
 import Header from "./components/Header"
 import  { useEffect} from 'react';
 // import './App.css'
import  CryptoCurrencyNews from './components/CryptoCurrencyNews';
import { Link, Outlet} from "react-router-dom"
import { GiVote} from 'react-icons/gi';
import Footer from './components/Footer';
import { MdCurrencyBitcoin } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";


 function Dashboard() {
  const dispatch = useDispatch()
  
 
 
 useEffect(() => {
  //8GF1QN6SA599XB3U
//CoinMarket Cap Key 6331e287-1198-4b12-a62a-dfe87a386dac
dispatch(fetchData())


}, [dispatch]);
//CryptoCompare key 07eaece4a2d2a139e158e955f2fbda6ca03d3b90fc567321ff9fa4e7debbb0a0
// https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR?api_key={07eaece4a2d2a139e158e955f2fbda6ca03d3b90fc567321ff9fa4e7debbb0a0}
// https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD?api_key={07eaece4a2d2a139e158e955f2fbda6ca03d3b90fc567321ff9fa4e7debbb0a0}
return (
  <section className="overflow-hidden">
    <Header/>
  <section className="flex">
    <section className="bg-[#ffffff] w-[8%] max-md:w-[2%]" >
   <section className=" gap-[.8em] max-md:text-[1rem] pb-[5em] bg-[#ffffff]  px-[2em] max-md:px-[0em] text-[1.2rem] flex flex-col text-[#000000] font-bold">
   <Link  className="mt-[8em] flex w-[6em] max-md:w-[5em] text-[#ff7f26] text-center border-solid border-[.2em]  border-[#ff7f26]" to="crypto-currency-container"><div>Crypto Exchange</div> <MdCurrencyBitcoin className='max-[600px]:w-[100%]' color={"gold"} size={50}/></Link>
    <Link className="border-solid flex w-[6em] max-md:w-[5em] text-[#ff7f26] border-[.2em] border-[#ff7f26]" to="currency-container"><div>Forex Exchange</div> <BsCurrencyExchange className='max-[600px]:w-[100%]' color={"#40ff5e"} size={50} /></Link>
    </section>
   </section>
    
    <section className="mt-[8em]">
      <section className="flex gap-[2em] max-md:gap-[.6em] ml-[20%] max-md:ml-[16%] mb-[1em] ">
      <img className="w-[50%] max-md:w-[55%] max-[600px]:ml-[1em] h-[10em]" src="../images/trump.webp"/>
      <section className="font-bold max-md:text-[.7rem] text-[1.2rem] text-[#5543ff]">
      <GiVote className="animate-bounce text-[#ffc92d] delay-700 " size={70}/>
      <h3>Make America Great Again</h3>
      <h4 className="text-[#ff242d]">Fight Fight Fight!!!</h4>
      </section>
      
      </section>
     <Outlet/>
    <CryptoCurrencyNews/>
    </section>
    </section>
    <Footer/>
  </section>
    
  )
}

export default Dashboard
