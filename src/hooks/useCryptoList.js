import { useSelector } from 'react-redux';

export function useCryptoList() {
  const { data7, error } = useSelector((state) => state.data);

  const symbols = [
    "BTC", "ETH", "ADA", "SOL", "PI", "BNB", "SHIB", "TON", "NOT", "CORE", "USDC", "CRV", "AAVE", "MATIC", "UNI", "USDT",
    "NEAR", "APT", "SUI", "EGLD", "TRX", "OP", "ARB", "PEPE", "FLOKI", "BONK", "WIF", "DAI", "FRAX", "GHO", "FET", "AGIX",
    "OCEAN", "AKT", "RNDR", "TAO", "ATOM", "DOT", "RUNE", "CANTO", "COMBO", "IMX", "STARK", "ZKS", "SAND", "MANA", "AXS",
    "ILV", "RARI", "ENJ", "AUDIO", "LOOKS", "JUP", "DYM", "ALT", "TIA", "AEVO", "PENDLE", "GRT", "BICO", "LIT", "ENS",
    "SAFE", "VELA", "NXRA", "BWO", "DBC", "VAI", "NUM", "LUNC", "SKL", "CFX", "SEI", "STRK", "ROSE", "CKB", "XDC", "KAVA",
    "WEMIX", "UFO", "PYR", "LEVER", "MCB", "HFT", "DYDX", "INJ", "PERP", "GMX", "API3", "NEST", "DIA", "BAND", "UMA",
    "ALICE", "AURY", "MAGIC", "GALA", "REVV", "MOG", "BORK", "TURBO", "sUSD", "USDD", "LUSD", "USDN",
    "PIVX", "SCRT", "DERO", "ZEC", "XMR", "KEK", "LBR", "TSUGT", "KYVE", "TNSR", "NTRN", "BEAM"
  ];

  const cryptoList = symbols
    .map((symbol) => data7?.DISPLAY?.[symbol]?.USD)
    .filter(Boolean);

  return { cryptoList, error };
}
