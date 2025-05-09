import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import { useCryptoList } from '../hooks/useCryptoList';
import { GiExitDoor } from "react-icons/gi";
import { Link} from "react-router-dom"

export default function CryptoCurrencyContainer2() {
  const { cryptoList, error } = useCryptoList();

 
  if (!cryptoList.length) {
    return (
      <div className="font-bold text-[3rem] max-md:text-[1.5rem] text-[#eba3ff] text-center mt-[3em]">
        Loading...
      </div>
    );
  }
  

  if (error) {
    return <div className="text-red-600 text-center mt-4">Error: {error}</div>;
  }

  return (
    <>
      <Link to="/"><GiExitDoor size={36} color={'#ff6e5a'} className="ml-[1.4em]" /></Link>
      <section className="max-md:ml-[.1em]">
        {/* Desktop Table */}
        <TableContainer className="max-md:hidden flex text-[#ffffff]" component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label="detailed crypto table">
            <TableHead className="bg-[#ff357f]">
              <TableRow>
                <TableCell align="center"><strong>SYMBOL</strong></TableCell>
                <TableCell align="center"><strong>PRICE</strong></TableCell>
                <TableCell align="center"><strong>HIGH DAY</strong></TableCell>
                <TableCell align="center"><strong>LAST UPDATE</strong></TableCell>
                <TableCell align="center"><strong>CHANGE 24 HOUR</strong></TableCell>
                <TableCell align="center"><strong>LOW HOUR</strong></TableCell>
                <TableCell align="center"><strong>HIGH HOUR</strong></TableCell>
                <TableCell align="center"><strong>OPEN HOUR</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-[#ffe4ad]">
              {cryptoList.map((crypto, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-[#52ff28] active:bg-[#ffe4ad]/80 transition duration-200 cursor-pointer"
                >
                  <TableCell align="center">
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={`https://www.cryptocompare.com${crypto.IMAGEURL}`}
                        alt={crypto.FROMSYMBOL}
                        className="w-6 h-6 object-contain"
                      />
                      <span>{crypto.FROMSYMBOL}</span>
                    </div>
                  </TableCell>
                  <TableCell align="center">{crypto.PRICE}</TableCell>
                  <TableCell align="center">{crypto.HIGHDAY}</TableCell>
                  <TableCell align="center">{crypto.LASTUPDATE}</TableCell>
                  <TableCell align="center" className={crypto.CHANGE24HOUR > 0 ? 'text-green-600' : 'text-red-600'}>
                    {crypto.CHANGE24HOUR}
                  </TableCell>
                  <TableCell align="center">{crypto.LOWHOUR}</TableCell>
                  <TableCell align="center">{crypto.HIGHHOUR}</TableCell>
                  <TableCell align="center">{crypto.OPENHOUR}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Mobile Table */}
        <TableContainer className="max-md:flex hidden overflow-x-auto text-[#ffffff]" component={Paper}>
          <Table sx={{ minWidth: 10 }} aria-label="compact crypto table">
            <TableHead className="bg-[#ff357f]">
              <TableRow>
                <TableCell align="center"><strong>SYMBOL</strong></TableCell>
                <TableCell align="center"><strong>PRICE</strong></TableCell>
                <TableCell align="center"><strong>HIGH DAY</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-[#ffe4ad]">
              {cryptoList.map((crypto, i) => (
                <TableRow
                  key={i}
                  className="hover:bg-[#52ff28] active:bg-[#52ff28]/80 transition duration-200 cursor-pointer"
                >
                 <TableCell align="center">
                      <div className="flex items-center justify-center gap-2">
                        <img
                          src={`https://www.cryptocompare.com${crypto.IMAGEURL}`}
                          alt={crypto.FROMSYMBOL}
                          className="w-6 h-6 object-contain"
                        />
                        <span>{crypto.FROMSYMBOL}</span>
                      </div>
                 </TableCell>

                  <TableCell align="center">{crypto.PRICE}</TableCell>
                   <TableCell align="center" className={crypto.HIGHDAY > 0 ? 'text-green-600' : 'text-red-600'}>
                  {crypto.HIGHDAY}
                </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </>
  );
}
