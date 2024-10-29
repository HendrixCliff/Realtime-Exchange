
import axios from 'axios';

export const fetchData1 = () => {
  return axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&limit=10&apikey=8GF1QN6SA599XB3U');
};

export const fetchData2 = () => {
  return axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&limit=10&apikey=8GF1QN6SA599XB3U');
};

export const fetchData3 = () => {
  return axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=SOL&to_currency=USD&limit=10&apikey=8GF1QN6SA599XB3U');
};

export const fetchData4 = () => {
  return axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=SHIB&to_currency=USD&limit=10&apikey=8GF1QN6SA599XB3U');
};

export const fetchData5 = () => {
  return axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USDT&to_currency=USD&limit=10&apikey=8GF1QN6SA599XB3U');
};

export const fetchData6 = () => {
  return axios.get('https://openexchangerates.org/api/latest.json?app_id=9f045b9695f64b39a1e6fd49dc5ff807');
};

export const fetchData7 = () => {
  return axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,SOL,PI,BNB,TON,NOT,ADA,CORE&tsyms=USD,EUR?api_key={07eaece4a2d2a139e158e955f2fbda6ca03d3b90fc567321ff9fa4e7debbb0a0}');
};

export const fetchData8 = () => {
  return axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key={07eaece4a2d2a139e158e955f2fbda6ca03d3b90fc567321ff9fa4e7debbb0a0}');
};

// export const fetchData9 = () => {
//   return axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BNB&to_currency=USD&limit=10&apikey=8GF1QN6SA599XB3U');
// };

// export const fetchData10 = () => {
//   return axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BNB&to_currency=USD&limit=10&apikey=8GF1QN6SA599XB3U');
// };