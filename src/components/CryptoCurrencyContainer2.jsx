import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import { useSelector } from 'react-redux';
import CryptoCurrencyContainer from '../components/CryptoCurrencyContainer';

export default function CryptoCurrencyContainer2() {
  const { data7, error } = useSelector((state) => state.data);

 
  const cryptoList = [
    data7?.DISPLAY?.BTC?.USD,
    data7?.DISPLAY?.ETH?.USD,
    data7?.DISPLAY?.ADA?.USD,
    data7?.DISPLAY?.SOL?.USD,
    data7?.DISPLAY?.PI?.USD,
    data7?.DISPLAY?.BNB?.USD,
    data7?.DISPLAY?.TON?.USD,
    data7?.DISPLAY?.NOT?.USD,
    data7?.DISPLAY?.CORE?.USD,
  ].filter(Boolean); // filter out any undefined/null

  if (!data7 || !data7.DISPLAY) {
    return <div className="font-bold text-[3rem] max-md:text-[1.5rem] text-[#eba3ff] text-center mt-[3em]">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center mt-4">Error: {error}</div>;
  }

  return (
    <>
      <CryptoCurrencyContainer />

      <section className="max-md:ml-[.1em]">
        {/* Desktop Table */}
        <TableContainer className="max-md:hidden flex text-[#ffffff]" component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label="detailed crypto table">
            <TableHead className="bg-[#ff357f]">
              <TableRow>
                <TableCell align="center"><strong>FROM SYMBOL</strong></TableCell>
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
                  <TableCell align="center">{crypto.FROMSYMBOL}</TableCell>
                  <TableCell align="center">{crypto.PRICE}</TableCell>
                  <TableCell align="center">{crypto.HIGHDAY}</TableCell>
                  <TableCell align="center">{crypto.LASTUPDATE}</TableCell>
                  <TableCell align="center">{crypto.CHANGE24HOUR}</TableCell>
                  <TableCell align="center">{crypto.LOWHOUR}</TableCell>
                  <TableCell align="center">{crypto.HIGHHOUR}</TableCell>
                  <TableCell align="center">{crypto.OPENHOUR}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Mobile Table */}
        <TableContainer className="max-md:flex hidden text-[#ffffff]" component={Paper}>
          <Table sx={{ minWidth: 10 }} aria-label="compact crypto table">
            <TableHead className="bg-[#ff357f]">
              <TableRow>
                <TableCell align="center"><strong>FROM SYMBOL</strong></TableCell>
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
                  <TableCell align="center">{crypto.FROMSYMBOL}</TableCell>
                  <TableCell align="center">{crypto.PRICE}</TableCell>
                  <TableCell align="center">{crypto.HIGHDAY}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </>
  );
}
