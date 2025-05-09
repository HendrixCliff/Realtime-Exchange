import { useSelector } from 'react-redux';
import { useState } from 'react';
import { convertCryptoToNaira } from './../utils/convertToNaira';
import { GiExitDoor } from "react-icons/gi";
import { Link} from "react-router-dom"

export default function CryptoToNairaConverter() {
  const { data6, data7 } = useSelector((state) => state.data);
  const nairaRate = data6?.rates?.NGN;

  // Use string state to allow controlled input without "stuck" 0 issues.
  const [symbol, setSymbol] = useState('BTC');
  const [amount, setAmount] = useState('1');

  // Retrieve crypto object safely.
  const crypto = data7?.DISPLAY?.[symbol]?.USD;
  // Remove commas and parse the price (if needed)
  const cryptoPriceUSD = crypto?.PRICE
  ? parseFloat(crypto.PRICE.replace(/[^\d.]/g, ''))
  : null;


  // Parse the user input from a string to a number.
  const numericAmount = parseFloat(amount) || 0;

  // Calculate conversion only if we have valid numbers.
  const result =
    cryptoPriceUSD && nairaRate && numericAmount > 0
      ? convertCryptoToNaira(cryptoPriceUSD, nairaRate, numericAmount)
      : null;

      console.log({
        amount,
        numericAmount,
        cryptoPriceUSD,
        nairaRate,
        result,
      });
      console.log('raw PRICE:', crypto?.PRICE);

  return (
    <section className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <Link to="/"><GiExitDoor size={36} color={'#ff6e5a'} className="ml-[1.4em]" /></Link>
      <h2 className="text-xl font-bold text-center mb-4">Crypto to Naira 💱</h2>

      <div className="flex flex-col gap-4">
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="p-2 border rounded"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        >
          {Object.keys(data7?.DISPLAY || {}).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>

        {result !== null && (
          <div className="text-lg font-semibold text-green-600">
            ₦{Number(result).toLocaleString()}
          </div>
        )}
      </div>
    </section>
  );
}
