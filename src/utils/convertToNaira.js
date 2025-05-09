export function convertCryptoToNaira(cryptoPriceUSD, nairaRate, quantity = 1) {
    const usdToNaira = nairaRate; // e.g. 1460
    return Number(cryptoPriceUSD) * usdToNaira * quantity;
  }
  