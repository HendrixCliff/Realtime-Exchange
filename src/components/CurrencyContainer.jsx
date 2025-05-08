/* eslint-disable react/prop-types */
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import { useSelector } from 'react-redux';

const currencyList = [
  ["ARS", "Argentine Peso"],
  ["GBP", "British Pound £"],
  ["JPY", "Japanese Yen ¥"],
  ["KWD", "Kuwaiti Dinar د.ك"],
  ["QAR", "Qatari Riyal ﷼"],
  ["JOD", "Jordanian Dinar د.ا"],
  ["SSP", "South Sudanese Pound"],
  ["KPW", "North Korean Won ₩"],
  ["OMR", "Omani Rial ﷼"],
  ["KZT", "Kazakhstani Tenge лв"],
  ["ILS", "Israeli New Sheqel ₪"],
  ["LBP", "Lebanese Pound £"],
  ["MAD", "Moroccan Dirham DH"],
  ["ZAR", "South African Rand"],
  ["CNY", "Chinese Yuan Renminbi ¥"],
  ["NGN", "Nigerian Naira ₦"],
  ["EUR", "European Euro €"],
  ["RWF", "Rwandan Franc FRw"],
  ["SCR", "Seychelles Rupee ₨"],
  ["MZN", "Mozambican Metical MT"],
  ["AED", "UAE Dirham"],
  ["SAR", "Saudi Arabian Riyal ﷼"],
  ["SGD", "Singapore Dollar"],
  ["KRW", "South Korean Won ₩"],
  ["XOF", "West African CFA"],
  ["UZS", "Uzbekistani Som лв"],
  ["YER", "Yemeni Rial ﷼"],
  ["THB", "Thai Baht ฿"],
  ["EGP", "Egyptian Pound £"],
  ["SYP", "Syrian Pound £"],
  ["LKR", "Sri Lankan Rupee ₨"],
  ["RUB", "Russian Ruble ₽"],
  ["AFN", "Afghan Afghani ؋"],
  ["INR", "Indian Rupee ₹"],
  ["NZD", "New Zealand Dollar"],
];

export default function CurrencyContainer() {
  const { data6, error } = useSelector((state) => state.data);
  const rates = data6?.rates;

  if (!rates) {
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
    <section>
      <h2 className="text-center text-[1.2rem] font-bold mb-4">
        United States Dollar vs Other Currencies
      </h2>

      {/* Desktop View */}
      <TableContainer className="max-md:hidden flex text-[#ffffff]" component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="currency exchange table">
          <TableHead className="bg-[#ff357f]">
            <TableRow>
              <TableCell><strong>Currency</strong></TableCell>
              <TableCell align="center"><strong>Exchange Rate</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-[#ffe4ad] divide-y divide-white/30">
            {currencyList.map(([code, name]) => (
              <TableRow
                key={code}
                className="hover:bg-[#52ff28] active:bg-[#ffe4ad]/80 transition duration-200 cursor-pointer"
              >
                <TableCell>{name}</TableCell>
                <TableCell align="center">{rates[code]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Mobile View */}
      <section className="max-md:flex hidden flex-col items-center mt-[2em]">
        <h2 className="text-center text-[1.2rem] font-bold mb-4">
          USD Exchange Rates (Mobile View)
        </h2>
        <TableContainer className="w-full max-w-[95%]" component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="mobile exchange table">
            <TableHead className="bg-[#ff357f]">
              <TableRow>
                <TableCell><strong>Currency</strong></TableCell>
                <TableCell align="center"><strong>Rate</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-[#ffe4ad] divide-y divide-white/30">
              {currencyList.map(([code, name]) => (
                <TableRow
                  key={code}
                  className="hover:bg-[#52ff28] active:bg-[#ffe4ad]/80 transition duration-200 cursor-pointer"
                >
                  <TableCell>{name}</TableCell>
                  <TableCell align="center">{rates[code]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </section>
  );
}
