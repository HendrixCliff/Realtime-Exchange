
import axios from 'axios';



export const fetchData6 = () => {
  return axios.get('https://openexchangerates.org/api/latest.json?app_id=9f045b9695f64b39a1e6fd49dc5ff807');
};

export const fetchData7 = () => {
  return axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,SOL,USDT,PI,BNB,SHIB,TON,NOT,ADA,USDC,AVAX,CRV,AAVE,NEAR,APT,SUI,EGLD,TRX,OP,ARB,PEPE,FLOKI,BONK,WIF,DAI,FRAX,GHO,MATIC,UNI,FET,AGIX,OCEAN,AKT,RNDR,TAO,ATOM,DOT,RUNE,CANTO,COMBO,IMX,STARK,ZKS,SAND,MANA,AXS,ILV,RARI,ENJ,AUDIO,LOOKS,JUP,DYM,ALT,TIA,AEVO,PENDLE,GRT,BICO,LIT,ENS,SAFE,KAVA,XDC,CKB,ROSE,STRK,SEI,CFX,SKL,LUNC,NUM,VAI,DBC,BWO,NXRA,VELA,GMX,PERP,INJ,DYDX,HFT,MCB,LEVER,PYR,UFO,WEMIX,REVV,GALA,MAGIC,AURY,ALICE,UMA,BAND,DIA,NEST,API3,USDN,LUSD,USDD,sUSD,TURBO,BOB,BORK,MOG,KEK,XMR,ZEC,DERO,SCRT,PIVX,BEAM,NTRN,TNSR,KYVE,TSUGT,LBR,CORE,&tsyms=USD,EUR?api_key={07eaece4a2d2a139e158e955f2fbda6ca03d3b90fc567321ff9fa4e7debbb0a0}');
};

export const fetchData8 = () => {
  return axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key={07eaece4a2d2a139e158e955f2fbda6ca03d3b90fc567321ff9fa4e7debbb0a0}');
};
//https://data-api.coindesk.com/index/cc/v1/latest/tick?market=ccix&instruments=MATIC-USD&api_key={07eaece4a2d2a139e158e955f2fbda6ca03d3b90fc567321ff9fa4e7debbb0a0}
// export const fetchData9 = () => {
//   return axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BNB&to_currency=USD&limit=10&apikey=8GF1QN6SA599XB3U');
// };

// export const fetchData10 = () => {
//   return axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BNB&to_currency=USD&limit=10&apikey=8GF1QN6SA599XB3U');
// };