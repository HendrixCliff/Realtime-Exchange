/* eslint-disable react/prop-types */
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import { useSelector } from 'react-redux';

export default function CryptoCurrencyContainer() {
  const { data1, data2, data3, data4, data5, error } = useSelector(state => state.data);

  const dataList = [data1, data2, data3, data4, data5].map(d => d?.["Realtime Currency Exchange Rate"]);

  const renderRow = (data, index) => (
    <TableRow
      key={index}
      className="hover:bg-[#82cfff] active:bg-[#82cfff]/80 transition duration-200 cursor-pointer"
    >
      <TableCell align="center">{data["1. From_Currency Code"]}</TableCell>
      <TableCell align="center">{data["2. From_Currency Name"]}</TableCell>
      <TableCell align="center">{data["3. To_Currency Code"]}</TableCell>
      <TableCell align="center">{data["4. To_Currency Name"]}</TableCell>
      <TableCell align="center">{data["5. Exchange Rate"]}</TableCell>
      <TableCell align="center">{data["6. Last Refreshed"]}</TableCell>
      <TableCell align="center">{data["8. Bid Price"]}</TableCell>
      <TableCell align="center">{data["9. Ask Price"]}</TableCell>
    </TableRow>
  );

  const renderCompactRow = (data, index) => (
    <TableRow
      key={index}
      className="hover:bg-[#82cfff] active:bg-[#82cfff]/80 transition duration-200 cursor-pointer"
    >
      <TableCell align="right">{data["2. From_Currency Name"]}</TableCell>
      <TableCell align="right">{data["5. Exchange Rate"]}</TableCell>
      <TableCell align="right">{data["6. Last Refreshed"]}</TableCell>
    </TableRow>
  );

  if (!data1 || !data1["Realtime Currency Exchange Rate"]) {
    return <div className="font-bold text-[2rem] text-[#eba3ff] text-center mt-[1em]">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center mt-4">Error: {error}</div>;
  }

  return (
    <section>
      <h1 className="font-bold text-[1.5rem] text-center">Realtime Crypto Currency Exchange Rate</h1>
      <h2 className="text-center text-[1.2rem] font-bold">
        United States Dollar vs Crypto Currencies
      </h2>

      <section className="ml-[10em] max-md:ml-[.6em]">

        {/* Desktop Table */}
        <TableContainer className="max-md:hidden flex text-[#ffffff]" component={Paper}>
          <Table sx={{ minWidth: 50 }} aria-label="detailed currency table">
            <TableHead className="bg-[#5543ff]">
              <TableRow>
                <TableCell><strong>From Currency Code</strong></TableCell>
                <TableCell align="center"><strong>From Currency Name</strong></TableCell>
                <TableCell align="center"><strong>To Currency Code</strong></TableCell>
                <TableCell align="center"><strong>To Currency Name</strong></TableCell>
                <TableCell align="center"><strong>Exchange Rate</strong></TableCell>
                <TableCell align="center"><strong>Last Refreshed</strong></TableCell>
                <TableCell align="center"><strong>Bid Price</strong></TableCell>
                <TableCell align="center"><strong>Ask Price</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-[#3e99ff]">
              {dataList.map((data, i) => renderRow(data, i))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Mobile Table */}
        <TableContainer className="max-md:flex hidden text-[#ffffff]" component={Paper}>
          <Table sx={{ minWidth: 10 }} aria-label="compact currency table">
            <TableHead className="bg-[#5543ff]">
              <TableRow>
                <TableCell align="right"><strong>From Currency Name</strong></TableCell>
                <TableCell align="right"><strong>Exchange Rate</strong></TableCell>
                <TableCell align="right"><strong>Last Refreshed</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-[#3e99ff]">
              {dataList.map((data, i) => renderCompactRow(data, i))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </section>
  );
}
