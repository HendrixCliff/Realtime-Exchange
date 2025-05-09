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
import { SiConvertio } from "react-icons/si";


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
  <section className="overflow-hidden mt-[0em]">
    <Header/>
  <section className="">
    <section className="bg-[#ffffff] w-[8%] max-md:w-[8%]" >
    <section className="gap-[.8em]  pb-[5em] bg-[#ffffff] px-[2em] max-md:px-[0em] text-[1.2rem] flex flex-col font-bold">
  <Link className="mt-[8em]  fixed z-[999] max-md:top-[-.6em] max-md:bottom-[15em] left-[3em] max-md:left-[2em] max-md:right-[27em] max-md:w-[5em]" to="crypto-currency-container">
    <MdCurrencyBitcoin className="text-[50px] max-[600px]:text-[40px]" size={50} color="gold" />
  </Link>
  <Link className=" fixed top-[12.5em] z-[999] max-md:top-[11.2em] max-md:left-[2.5em] left-[3.5em] bottom-[0em] max-md:bottom-[0em] max-md:right-[27em] right-[27em] max-md:w-[5em]" to="currency-container">
    <BsCurrencyExchange className="text-[50px] max-[600px]:text-[40px]" size={45} color="#40ff5e" />
  </Link>
  <Link
  className="fixed z-[999] top-[16.5em] max-[600px]:top-[14.9em] max-md:top-[14.9em] 
             left-[3.5em] max-md:left-[2.5em] 
             bottom-0 right-[27em] max-md:right-[27em] max-md:w-[5em]"
  to="crypto-to-naira-converter"
>
  <SiConvertio className="text-[50px] max-[600px]:text-[40px]" color="#a39c9c" />
</Link>


</section>

   </section>
    
    <section className="mt-[2em] max-md:mt-[.5em]">
      <section className="flex gap-[2em] max-md:gap-[.6em] ml-[20%] items-center max-md:ml-[16%] mb-[1em] ">
      <img className="w-[50%] max-[600px]:w-[40%] max-md:w-[55%] max-[600px]:ml-[1.2em] h-[10em]" src="../images/trump.webp"/>
      <h3 className="font-bold max-md:text-[.7rem] text-[1.2rem] text-[#5543ff]">Make America Great Again</h3>
      
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
