import TradingViewWidget from 'react-tradingview-widget';
import { ActivityIcon } from 'lucide-react';

const CryptoChart = () => {
  return (
    <div className="glass-card p-6 rounded-lg mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">Protocol Activity</h2>
          <p className="text-sm text-muted-foreground">Real-time lending & borrowing trends</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-success/10 to-success/5">
          <ActivityIcon className="w-4 h-4 text-success" />
          <span className="text-sm font-medium text-success">Live</span>
        </div>
      </div>
      
      <div className="h-[400px] w-full">
        <TradingViewWidget
          symbol="BINANCE:BTCUSDT"
          theme="light"
          locale="en"
          autosize
          hide_side_toolbar={false}
          allow_symbol_change={true}
          interval="D"
          toolbar_bg="#FAFAF8"
          enable_publishing={false}
          hide_top_toolbar={false}
          save_image={false}
          container_id="tradingview_chart"
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
        <div>
          <p className="text-xs text-muted-foreground mb-1">24h Lend Volume</p>
          <p className="text-lg font-semibold text-success">$124.5M</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">24h Borrow Volume</p>
          <p className="text-lg font-semibold text-warning">$87.3M</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Avg. Interest Rate</p>
          <p className="text-lg font-semibold text-primary">5.8%</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoChart;
