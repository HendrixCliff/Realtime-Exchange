/* eslint-disable react/prop-types */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector} from 'react-redux'


export default function CurrencyContainer() {
    const {data6, error } = useSelector((state) => state.data)
    const currencyExchangeRate = data6?.["rates"]
    return (
        <section>
         
      { !currencyExchangeRate || !currencyExchangeRate ? 
      (<div className="font-bold text-[3rem] max-md:text-[1.5rem] text-[#eba3ff] text-center mt-[3em]">Loading...</div>) : error ?  (<div>Error: {error}</div>)
      : 
      (
        <section className=" ">
<TableContainer className="max-md:hidden flex" component={Paper}>
            <h2 className="text-center text-[1.2rem] max-md:hidden flex font-bold ">United State Dollars against Other Countries</h2>
        <Table sx={{ width: 50, minWidth: 50, color: "#ffffff", fontWeight: "semi-bold" }} aria-label="simple table">
          <TableHead className="bg-[#5543ff]">
            <TableRow>
              <TableCell ><strong>Currency & Symbol</strong></TableCell>
              <TableCell align="right"><strong>Exchange Rate</strong> </TableCell>
              <TableCell align="right"><strong>Currency & Symbol</strong></TableCell>
              <TableCell align="right"><strong>Exchange Rate</strong></TableCell>
              <TableCell align="right"><strong>Currency & Symbol</strong> </TableCell>
              <TableCell align="right"><strong>Exchange Rate</strong> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-[#3e99ff]">
               <TableRow >
                <TableCell>Argentine Peso</TableCell>
               <TableCell align="right">{currencyExchangeRate["ARS"]}</TableCell>
               <TableCell>United Kingdom Pound Sterling £</TableCell>
               <TableCell align="right">{currencyExchangeRate["GBP"]}</TableCell>
              
               </TableRow>
               
                <TableRow>
                <TableCell>Japanese Yen ¥</TableCell>
               <TableCell align="right">{currencyExchangeRate["JPY"]}</TableCell>
               <TableCell>Kuwaiti Dinar د.ك</TableCell>
               <TableCell align="right">{currencyExchangeRate["KWD"]}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Qatari Riyal ﷼</TableCell>
               <TableCell align="right">{currencyExchangeRate["QAR"]}</TableCell>
               <TableCell>Jordanian Dinar د.ا</TableCell>
               <TableCell align="right">{currencyExchangeRate["JOD"]}</TableCell>
                </TableRow>
               <TableRow>
               
               <TableCell>South Sudanese pound</TableCell>
               <TableCell align="right">{currencyExchangeRate["SSP"]}</TableCell>
               <TableCell>North Korean Won ₩</TableCell>
               <TableCell align="right">{currencyExchangeRate["KPW"]}</TableCell>
               </TableRow>
               <TableRow>
               
               <TableCell>Omani Rial ﷼</TableCell>
               <TableCell align="right">{currencyExchangeRate["OMR"]}</TableCell>
               <TableCell>Kazakhstani Tenge лв</TableCell>
               <TableCell align="right">{currencyExchangeRate["KZT"]}</TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Israeli New Sheqel ₪</TableCell>
               <TableCell align="right">{currencyExchangeRate["ILS"]}</TableCell>
              
               </TableRow>
               <TableRow>
                <TableCell>Lebanese Pound £</TableCell>
               <TableCell align="right">{currencyExchangeRate["LBP"]}</TableCell>
               <TableCell>Moroccan Dirham DH</TableCell>
               <TableCell align="right">{currencyExchangeRate["MAD"]}</TableCell>
               <TableCell>South African Rand</TableCell>
               <TableCell align="right">{currencyExchangeRate["ZAR"]}</TableCell>
               </TableRow>
               <TableRow>
                <TableCell>Chinese Yuan Renminbi ¥</TableCell>
               <TableCell align="right">{currencyExchangeRate["CNY"]}</TableCell>
               
               </TableRow>
               <TableRow>
               <TableCell>Nigeria</TableCell>
               <TableCell align="right">{currencyExchangeRate["NGN"]}</TableCell>
               <TableCell>European Euro	</TableCell>
               <TableCell align="right">{currencyExchangeRate["EUR"]}</TableCell>
               <TableCell>Rwandan Franc FRw</TableCell>
               <TableCell align="right">{currencyExchangeRate["RWF"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell> Seychelles Rupee ₨</TableCell>
               <TableCell align="right">{currencyExchangeRate["SCR"]}</TableCell>
               <TableCell>Mozambican Metical MT</TableCell>
               <TableCell align="right">{currencyExchangeRate["MZN"]}</TableCell>
               <TableCell>United Arab Emirates Dirham</TableCell>
               <TableCell align="right">{currencyExchangeRate["AED"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Saudi Arabian Riyal ﷼</TableCell>
               <TableCell align="right">{currencyExchangeRate["SAR"]}</TableCell>
               <TableCell>Singapore Dollar</TableCell>
               <TableCell align="right">{currencyExchangeRate["SGD"]}</TableCell>
               <TableCell>Korean Won</TableCell>
               <TableCell align="right">{currencyExchangeRate["KRW"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Moroccan Dirham</TableCell>
               <TableCell align="right">{currencyExchangeRate["MAD"]}</TableCell>
               <TableCell>West African CFA </TableCell>
               <TableCell align="right">{currencyExchangeRate["XOF"]}</TableCell>
               <TableCell>Uzbekistani Som лв</TableCell>
               <TableCell align="right">{currencyExchangeRate["UZS"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>	Yemeni Rial ﷼</TableCell>
               <TableCell align="right">{currencyExchangeRate["YER"]}</TableCell>
               <TableCell>Thai Baht ฿</TableCell>
               <TableCell align="right">{currencyExchangeRate["THB"]}</TableCell>
               <TableCell>Egyptian Pound £</TableCell>
               <TableCell align="right">{currencyExchangeRate["EGP"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>	Syrian Pound £</TableCell>
               <TableCell align="right">{currencyExchangeRate["SYP"]}</TableCell>
               <TableCell>Russian Ruble ₽</TableCell>
               <TableCell align="right">{currencyExchangeRate["RUB"]}</TableCell>
               <TableCell>	Sri Lankan Rupee ₨</TableCell>
               <TableCell align="right">{currencyExchangeRate["LKR"]}</TableCell>
               </TableRow>
              
               
              
          
          </TableBody>
        </Table>
      </TableContainer>
      <section className="">
      <h2 className="text-center text-[1.2rem] max-md:flex hidden font-bold ">United State Dollars against Other<br/> Countries</h2>
      <TableContainer className=" mt-[2em] max-md:flex max-md:ml-[1em] hidden " component={Paper}>
        <Table sx={{ width: 40, color: "#ffffff", fontWeight: "semi-bold"}} aria-label="simple table">
          <TableHead className="bg-[#5543ff]">
            <TableRow>
              <TableCell ><strong>Currency & Symbol</strong></TableCell>
              <TableCell align="right"><strong>Exchange Rate</strong> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-[#3e99ff]">
               <TableRow >
                <TableCell className="text-[#ffffff]">Argentine Peso</TableCell>
               <TableCell align="right">{currencyExchangeRate["ARS"]}</TableCell>
               
               </TableRow>
               <TableRow>
                <TableCell>United Kingdom Pound Sterling £</TableCell>
               <TableCell align="right">{currencyExchangeRate["GBP"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Chinese Yuan Renminbi ¥</TableCell>
               <TableCell align="right">{currencyExchangeRate["CNY"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>South African Rand</TableCell>
               <TableCell align="right">{currencyExchangeRate["ZAR"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>South Sudanese pound</TableCell>
               <TableCell align="right">{currencyExchangeRate["SSP"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Egyptian Pound £</TableCell>
               <TableCell align="right">{currencyExchangeRate["EGP"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Qatari Riyal ﷼</TableCell>
               <TableCell align="right">{currencyExchangeRate["QAR"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>New Zealand Dollar</TableCell>
               <TableCell align="right">{currencyExchangeRate["NZD"]}</TableCell>
               
               </TableRow>
               <TableRow>
                 <TableCell>Thai Baht ฿</TableCell>
               <TableCell align="right">{currencyExchangeRate["THB"]}</TableCell>
              
               </TableRow>
               <TableRow>
               <TableCell>Jordanian Dinar د.ا</TableCell>
               <TableCell align="right">{currencyExchangeRate["JOD"]}</TableCell>
               
               </TableRow>
               <TableRow>
               <TableCell>North Korean Won ₩</TableCell>
               <TableCell align="right">{currencyExchangeRate["KPW"]}</TableCell>
              
               </TableRow>
               <TableRow>
               <TableCell>Omani Rial ﷼</TableCell>
               <TableCell align="right">{currencyExchangeRate["OMR"]}</TableCell>
              
               </TableRow>
               <TableRow>
               <TableCell>Japanese Yen ¥</TableCell>
               <TableCell align="right">{currencyExchangeRate["JPY"]}</TableCell>
              
               </TableRow>
               <TableRow>
               <TableCell>Kuwaiti Dinar د.ك</TableCell>
               <TableCell align="right">{currencyExchangeRate["KWD"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Kazakhstani Tenge лв</TableCell>
               <TableCell align="right">{currencyExchangeRate["KZT"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Israeli New Sheqel ₪</TableCell>
               <TableCell align="right">{currencyExchangeRate["ILS"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Indian Rupee ₹</TableCell>
               <TableCell align="right">{currencyExchangeRate["INR"]}</TableCell>
               </TableRow>
               <TableRow>

               <TableCell>Moroccan Dirham DH</TableCell>
               <TableCell align="right">{currencyExchangeRate["MAD"]}</TableCell>
              
               </TableRow>
               <TableRow>
               <TableCell>Lebanese Pound £</TableCell>
               <TableCell align="right">{currencyExchangeRate["LBP"]}</TableCell>
              
               </TableRow>
               <TableRow>
               <TableCell>Afghanistani Afghani 	؋</TableCell>
               <TableCell align="right">{currencyExchangeRate["AFN"]}</TableCell>
               
               </TableRow>
               <TableRow>
               <TableCell>Nigeria</TableCell>
               <TableCell align="right">{currencyExchangeRate["NGN"]}</TableCell>
               
               </TableRow>
               <TableRow>
               <TableCell>European Euro	</TableCell>
               <TableCell align="right">{currencyExchangeRate["EUR"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Singapore Dollar</TableCell>
               <TableCell align="right">{currencyExchangeRate["SGD"]}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell>Rwandan Franc FRw</TableCell>
               <TableCell align="right">{currencyExchangeRate["RWF"]}</TableCell>
                </TableRow>
               <TableRow>
               <TableCell> Seychelles Rupee ₨</TableCell>
               <TableCell align="right">{currencyExchangeRate["SCR"]}</TableCell>
               
               </TableRow>
               <TableRow>
                <TableCell>United Arab Emirates Dirham</TableCell>
               <TableCell align="right">{currencyExchangeRate["AED"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Mozambican Metical MT</TableCell>
               <TableCell align="right">{currencyExchangeRate["MZN"]}</TableCell>
               
               </TableRow>
               <TableRow>
               <TableCell>Saudi Arabian Riyal ﷼</TableCell>
               <TableCell align="right">{currencyExchangeRate["SAR"]}</TableCell>
               
               </TableRow>
              
               <TableRow>
               <TableCell>Uzbekistani Som лв</TableCell>
               <TableCell align="right">{currencyExchangeRate["UZS"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Korean Won</TableCell>
               <TableCell align="right">{currencyExchangeRate["KRW"]}</TableCell>
               
               </TableRow>
               <TableRow>
               <TableCell>West African CFA </TableCell>
               <TableCell align="right">{currencyExchangeRate["XOF"]}</TableCell>
               
               </TableRow>
               <TableRow>
               <TableCell>	Yemeni Rial ﷼</TableCell>
               <TableCell align="right">{currencyExchangeRate["YER"]}</TableCell>
               
               </TableRow>
               <TableRow>
               <TableCell>Egyptian Pound £</TableCell>
               <TableCell align="right">{currencyExchangeRate["EGP"]}</TableCell>
               
               </TableRow>
               <TableRow>
               <TableCell>Thai Baht ฿</TableCell>
               <TableCell align="right">{currencyExchangeRate["THB"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>	Syrian Pound £</TableCell>
               <TableCell align="right">{currencyExchangeRate["SYP"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>	Sri Lankan Rupee ₨</TableCell>
               <TableCell align="right">{currencyExchangeRate["LKR"]}</TableCell>
               </TableRow>
               <TableRow>
               <TableCell>Russian Ruble ₽</TableCell>
               <TableCell align="right">{currencyExchangeRate["RUB"]}</TableCell>
               
               </TableRow>
              
               
              
          </TableBody>
        </Table>
      </TableContainer>
      </section>
      
        </section>
        
      )}
     </section>
    )
}