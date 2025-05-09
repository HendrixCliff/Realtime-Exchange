
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './src/routes/ErrorPage.jsx';
import CurrencyContainer from './src/components/CurrencyContainer.jsx';
import CryptoCurrencyContainer2 from './src/components/CryptoCurrencyContainer2.jsx';
import Dashoard from "./src/Dashboard.jsx"
import CryptoToNairaConverter from './src/components/CryptoToNairaConverter.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashoard />} />
        <Route path="/currency-container" element={<CurrencyContainer />} />
        <Route path="/crypto-currency-container" element={<CryptoCurrencyContainer2 />} />
        <Route path="/crypto-to-naira-converter" element={<CryptoToNairaConverter />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
