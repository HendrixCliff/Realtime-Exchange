/* eslint-disable react/prop-types */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector} from 'react-redux'






export default function CryptoCurrencyContainer() {
  const {data1, data2, data3, data4, data5, error } = useSelector((state) => state.data)
  const exchangeRateData1 = data1?.["Realtime Currency Exchange Rate"];
  const exchangeRateData2 = data2?.["Realtime Currency Exchange Rate"];
  const exchangeRateData3 = data3?.["Realtime Currency Exchange Rate"];
  const exchangeRateData4 = data4?.["Realtime Currency Exchange Rate"];
  const exchangeRateData5 = data5?.["Realtime Currency Exchange Rate"];
    return(
        <section>
        <h1 className="font-bold text-[1.5rem] text-center">Realtime Crypto Currency Exchange Rate</h1>  
         <h2 className="text-center text-[1.2rem] font-bold ">United State Dollars against  Crypto Currencies</h2>
        { !data1 || !data1["Realtime Currency Exchange Rate"] ?  
        (<div className="font-bold text-[2rem] text-[#eba3ff] text-center mt-[1em]">Loading...</div>) : error ?  (<div>Error: {error}</div>)
        : (  
          <section className="ml-[10em] max-md:ml-[.6em]">
<TableContainer className="max-md:hidden flex text-[#ffffff]" component={Paper}>
      <Table sx={{ minWidth: 50, color: "#ffffff", fontWeight: "semi-bold" }} aria-label="simple table">
        <TableHead className="bg-[#5543ff]">
          <TableRow>
            <TableCell><strong>From Currency Code</strong></TableCell>
            <TableCell align="right"><strong>From Currency Name</strong> </TableCell>
            <TableCell align="right"><strong>To Currency Code</strong></TableCell>
            <TableCell align="right"><strong>To Currency Name</strong></TableCell>
            <TableCell align="right"><strong>Exchange Rate</strong> </TableCell>
            <TableCell align="right"><strong>Last Refreshed</strong> </TableCell>
            <TableCell align="right"><strong>Bid Price</strong> </TableCell>
            <TableCell align="right"><strong>Ask Price</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="bg-[#3e99ff]">
         
            <TableRow>
              <TableCell align="right">{exchangeRateData1["1. From_Currency Code"]}</TableCell>
              <TableCell align="right">{exchangeRateData1["2. From_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData1["3. To_Currency Code"]}</TableCell>
              <TableCell align="right">{exchangeRateData1["4. To_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData1["5. Exchange Rate"]}</TableCell>
              <TableCell align="right">{exchangeRateData1["6. Last Refreshed"]}</TableCell>
              <TableCell align="right">{exchangeRateData1["8. Bid Price"]}</TableCell>
              <TableCell align="right">{exchangeRateData1["9. Ask Price"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{exchangeRateData2["1. From_Currency Code"]}</TableCell>
              <TableCell align="right">{exchangeRateData2["2. From_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData2["3. To_Currency Code"]}</TableCell>
              <TableCell align="right">{exchangeRateData2["4. To_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData2["5. Exchange Rate"]}</TableCell>
              <TableCell align="right">{exchangeRateData2["6. Last Refreshed"]}</TableCell>
              <TableCell align="right">{exchangeRateData2["8. Bid Price"]}</TableCell>
              <TableCell align="right">{exchangeRateData2["9. Ask Price"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{exchangeRateData3["1. From_Currency Code"]}</TableCell>
              <TableCell align="right">{exchangeRateData3["2. From_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData3["3. To_Currency Code"]}</TableCell>
              <TableCell align="right">{exchangeRateData3["4. To_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData3["5. Exchange Rate"]}</TableCell>
              <TableCell align="right">{exchangeRateData3["6. Last Refreshed"]}</TableCell>
              <TableCell align="right">{exchangeRateData3["8. Bid Price"]}</TableCell>
              <TableCell align="right">{exchangeRateData3["9. Ask Price"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{exchangeRateData4["1. From_Currency Code"]}</TableCell>
              <TableCell align="right">{exchangeRateData4["2. From_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData4["3. To_Currency Code"]}</TableCell>
              <TableCell align="right">{exchangeRateData4["4. To_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData4["5. Exchange Rate"]}</TableCell>
              <TableCell align="right">{exchangeRateData4["6. Last Refreshed"]}</TableCell>
              <TableCell align="right">{exchangeRateData4["8. Bid Price"]}</TableCell>
              <TableCell align="right">{exchangeRateData4["9. Ask Price"]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{exchangeRateData5["1. From_Currency Code"]}</TableCell>
              <TableCell align="right">{exchangeRateData5["2. From_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData5["3. To_Currency Code"]}</TableCell>
              <TableCell align="right">{exchangeRateData5["4. To_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData5["5. Exchange Rate"]}</TableCell>
              <TableCell align="right">{exchangeRateData5["6. Last Refreshed"]}</TableCell>
              <TableCell align="right">{exchangeRateData5["8. Bid Price"]}</TableCell>
              <TableCell align="right">{exchangeRateData5["9. Ask Price"]}</TableCell>
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>

    <TableContainer className="max-md:flex hidden text-[#ffffff]" component={Paper}>
      <Table sx={{ minWidth: 10, color: "#ffffff" , fontWeight: "semi-bold"}} aria-label="simple table">
        <TableHead className="bg-[#5543ff]">
          <TableRow>

            <TableCell align="right"><strong>From Currency Name</strong> </TableCell>
           
            <TableCell align="right"><strong>Exchange Rate</strong> </TableCell>
            <TableCell align="right"><strong>Last Refreshed</strong> </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody className="bg-[#3e99ff]">
         
            <TableRow>
              
              <TableCell align="right">{exchangeRateData1["2. From_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData1["5. Exchange Rate"]}</TableCell>
              <TableCell align="right">{exchangeRateData1["6. Last Refreshed"]}</TableCell>
             
            </TableRow>
            <TableRow>
              
              <TableCell align="right">{exchangeRateData2["2. From_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData2["5. Exchange Rate"]}</TableCell>
              <TableCell align="right">{exchangeRateData2["6. Last Refreshed"]}</TableCell>
              
            </TableRow>
            <TableRow>
             
              <TableCell align="right">{exchangeRateData3["2. From_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData3["5. Exchange Rate"]}</TableCell>
              <TableCell align="right">{exchangeRateData3["6. Last Refreshed"]}</TableCell>
            
            </TableRow>
            <TableRow>
              
              <TableCell align="right">{exchangeRateData4["2. From_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData4["5. Exchange Rate"]}</TableCell>
              <TableCell align="right">{exchangeRateData4["6. Last Refreshed"]}</TableCell>
             
            </TableRow>
            <TableRow>
              
              <TableCell align="right">{exchangeRateData5["2. From_Currency Name"]}</TableCell>
              <TableCell align="right">{exchangeRateData5["5. Exchange Rate"]}</TableCell>
              <TableCell align="right">{exchangeRateData5["6. Last Refreshed"]}</TableCell>
             
            </TableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
          </section>  
    )
}   
        </section>
    )
}