import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector} from 'react-redux'
import CryptoCurrencyContainer from '../components/CryptoCurrencyContainer';



export default function CryptoCurrencyContainer2() {
    const {data7, error } = useSelector((state) => state.data)
    console.log(data7)
    const cryptoCurrencyData1 = data7?.DISPLAY?.BTC?.USD;
    const cryptoCurrencyData2 = data7?.DISPLAY?.ETH?.USD;
    const cryptoCurrencyData3 = data7?.DISPLAY?.ADA?.USD;
    const cryptoCurrencyData4 = data7?.DISPLAY?.SOL?.USD;
    const cryptoCurrencyData5 = data7?.DISPLAY?.PI?.USD;
    const cryptoCurrencyData6 = data7?.DISPLAY?.BNB?.USD;
    const cryptoCurrencyData7 = data7?.DISPLAY?.TON?.USD;
    const cryptoCurrencyData8 = data7?.DISPLAY?.NOT?.USD;
    const cryptoCurrencyData9 = data7?.DISPLAY?.CORE?.USD;


       return (
        <section className="">
        <CryptoCurrencyContainer/>
     { !data7 || !data7["DISPLAY"] ?  
      (<div className="font-bold text-[3rem] max-md:text-[1.5rem] text-[#eba3ff] text-center mt-[3em]">Loading...</div>) : error ?  (<div>Error: {error}</div>)
      : (    
    <section className="ml-[10em] max-md:ml-[.6em]">
     <TableContainer className="max-md:hidden flex text-[#ffffff]" component={Paper} >
  <Table sx={{width: 50, minWidth: 50, color: "#ffffff", fontWeight: "semi-bold" }}  aria-label="simple table">
    <TableHead className="bg-[#5543ff]">
      <TableRow>
      <TableCell align="right"><strong>FROM SYMBOL</strong></TableCell>
        <TableCell align="right"><strong>PRICE</strong></TableCell>
        <TableCell align="right"><strong>HIGH DAY</strong> </TableCell>
        <TableCell align="right"><strong>LAST UPDATE</strong></TableCell>
        <TableCell align="right"><strong>CHANGE 24 HOUR</strong></TableCell>
        <TableCell align="right"><strong>LOW HOUR</strong> </TableCell>
        <TableCell align="right"><strong>HIGH HOUR</strong> </TableCell>
        <TableCell align="right"><strong>OPEN HOUR</strong> </TableCell>
      </TableRow>
    </TableHead>
    <TableBody className="bg-[#3e99ff]">
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData3["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData3["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData3["HIGHDAY"]} </TableCell>
          <TableCell align="right">{cryptoCurrencyData3["LASTUPDATE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData3["CHANGE24HOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData3["LOWHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData3["HIGHHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData3["OPENHOUR"]}</TableCell>
          
        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData1["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData1["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData1["HIGHDAY"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData1["LASTUPDATE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData1["CHANGE24HOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData1["LOWHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData1["HIGHHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData1["OPENHOUR"]}</TableCell>
      
        </TableRow>
        <TableRow>
        <TableCell align="right">ETH{cryptoCurrencyData2["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData2["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData2["HIGHDAY"]} </TableCell>
          <TableCell align="right">{cryptoCurrencyData2["LASTUPDATE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData2["CHANGE24HOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData2["LOWHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData2["HIGHHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData2["OPENHOUR"]}</TableCell>
         
        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData4["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData4["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData4["HIGHDAY"]} </TableCell>
          <TableCell align="right">{cryptoCurrencyData4["LASTUPDATE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData4["CHANGE24HOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData4["LOWHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData4["HIGHHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData4["OPENHOUR"]}</TableCell>

        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData5["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData5["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData5["HIGHDAY"]} </TableCell>
          <TableCell align="right">{cryptoCurrencyData5["LASTUPDATE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData5["CHANGE24HOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData5["LOWHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData5["HIGHHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData5["OPENHOUR"]}</TableCell>
          
        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData6["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData6["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData6["HIGHDAY"]} </TableCell>
          <TableCell align="right">{cryptoCurrencyData6["LASTUPDATE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData6["CHANGE24HOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData6["LOWHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData6["HIGHHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData6["OPENHOUR"]}</TableCell>
      
        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData7["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData7["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData7["HIGHDAY"]} </TableCell>
          <TableCell align="right">{cryptoCurrencyData7["LASTUPDATE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData7["CHANGE24HOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData7["LOWHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData7["HIGHHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData7["OPENHOUR"]}</TableCell>

        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData8["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData8["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData8["HIGHDAY"]} </TableCell>
          <TableCell align="right">{cryptoCurrencyData8["LASTUPDATE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData8["CHANGE24HOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData8["LOWHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData8["HIGHHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData8["OPENHOUR"]}</TableCell>
         
        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData9["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData9["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData9["HIGHDAY"]} </TableCell>
          <TableCell align="right">{cryptoCurrencyData9["LASTUPDATE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData9["CHANGE24HOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData9["LOWHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData9["HIGHHOUR"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData9["OPENHOUR"]}</TableCell>
         
        </TableRow>
    </TableBody>
  </Table>
</TableContainer>

<TableContainer className="max-md:flex hidden text-[#ffffff]" component={Paper} >
  <Table sx={{width: 10, color: "#ffffff", fontWeight: "semi-bold"}}  aria-label="simple table">
    <TableHead className="bg-[#5543ff]">
      <TableRow>
      <TableCell align="right"><strong>FROM SYMBOL</strong></TableCell>
        <TableCell align="right"><strong>PRICE</strong></TableCell>
        <TableCell align="right"><strong>HIGH DAY</strong> </TableCell>
    
      </TableRow>
    </TableHead>
    <TableBody className="bg-[#3e99ff]">
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData3["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData3["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData3["HIGHDAY"]} </TableCell>
          
        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData1["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData1["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData1["HIGHDAY"]}</TableCell>
          
        </TableRow>
        <TableRow>
        <TableCell align="right">ETH{cryptoCurrencyData2["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData2["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData2["HIGHDAY"]} </TableCell>
          
         
        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData4["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData4["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData4["HIGHDAY"]} </TableCell>
        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData5["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData5["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData5["HIGHDAY"]} </TableCell>
        </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData6["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData6["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData6["HIGHDAY"]} </TableCell>
       </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData7["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData7["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData7["HIGHDAY"]} </TableCell>
      </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData8["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData8["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData8["HIGHDAY"]} </TableCell>
      </TableRow>
        <TableRow>
        <TableCell align="right">{cryptoCurrencyData9["FROMSYMBOL"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData9["PRICE"]}</TableCell>
          <TableCell align="right">{cryptoCurrencyData9["HIGHDAY"]} </TableCell>
          
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