import { TrendingUpIcon, ShieldCheckIcon, LockIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const fetchCryptoData = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Generate mock lending APYs based on crypto data
const generateLendingData = (cryptos: any[]) => {
  return cryptos.map((crypto, index) => ({
    ...crypto,
    supplyAPY: (4.5 + index * 0.8 + Math.random() * 2).toFixed(2),
    borrowAPY: (6.2 + index * 1.2 + Math.random() * 3).toFixed(2),
    utilization: (65 + Math.random() * 25).toFixed(1),
    collateralFactor: (70 + Math.random() * 15).toFixed(0),
    zkSecured: true,
  }));
};

const CryptoList = () => {
  const { data: cryptos, isLoading } = useQuery({
    queryKey: ['cryptos'],
    queryFn: fetchCryptoData,
    refetchInterval: 30000,
  });

  const lendingMarkets = cryptos ? generateLendingData(cryptos) : [];

  if (isLoading) {
    return <div className="glass-card rounded-lg p-6 animate-pulse">Loading markets...</div>;
  }

  return (
    <div className="glass-card rounded-lg p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Lending Markets</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheckIcon className="w-4 h-4 text-primary" />
          <span>All markets ZK-secured</span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-muted-foreground border-b border-gray-200">
              <th className="pb-4 font-medium">Asset</th>
              <th className="pb-4 font-medium">Supply APY</th>
              <th className="pb-4 font-medium">Borrow APY</th>
              <th className="pb-4 font-medium">Utilization</th>
              <th className="pb-4 font-medium">Collateral Factor</th>
              <th className="pb-4 font-medium">Security</th>
            </tr>
          </thead>
          <tbody>
            {lendingMarkets?.map((market) => (
              <tr 
                key={market.symbol} 
                className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-pointer"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={market.image} 
                      alt={market.name} 
                      className="w-10 h-10 rounded-full ring-2 ring-gray-100" 
                    />
                    <div>
                      <p className="font-semibold text-foreground">{market.name}</p>
                      <p className="text-sm text-muted-foreground">{market.symbol.toUpperCase()}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-success font-semibold">{market.supplyAPY}%</span>
                    <TrendingUpIcon className="w-3 h-3 text-success" />
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-warning font-semibold">{market.borrowAPY}%</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-purple rounded-full"
                        style={{ width: `${market.utilization}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{market.utilization}%</span>
                  </div>
                </td>
                <td className="py-4">
                  <span className="font-medium">{market.collateralFactor}%</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-1.5">
                    <LockIcon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">ZK-Proof</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-purple/5 border border-primary/20">
        <div className="flex items-start gap-3">
          <ShieldCheckIcon className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <p className="font-semibold text-sm mb-1">Zero-Knowledge Privacy Protection</p>
            <p className="text-xs text-muted-foreground">
              All transactions are secured with zk-SNARK proofs, ensuring your lending and borrowing 
              activities remain private while maintaining protocol integrity and transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
