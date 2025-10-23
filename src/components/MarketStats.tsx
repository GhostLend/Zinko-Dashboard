import { ShieldCheckIcon, UsersIcon, TrendingUpIcon, LockIcon } from "lucide-react";

const MarketStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="glass-card p-6 rounded-lg animate-slide-up protocol-stat">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">Total Value Locked</h3>
          <div className="p-2 rounded-lg bg-primary/10">
            <TrendingUpIcon className="w-4 h-4 text-primary" />
          </div>
        </div>
        <p className="text-3xl font-bold mb-1">$842.5M</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-success font-medium">↑ 12.4%</span>
          <span className="text-xs text-muted-foreground">vs last week</span>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-lg animate-slide-up protocol-stat" style={{animationDelay: '0.1s'}}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">Active Lenders</h3>
          <div className="p-2 rounded-lg bg-success/10">
            <UsersIcon className="w-4 h-4 text-success" />
          </div>
        </div>
        <p className="text-3xl font-bold mb-1">12,847</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-success font-medium">↑ 8.2%</span>
          <span className="text-xs text-muted-foreground">new this month</span>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-lg animate-slide-up protocol-stat" style={{animationDelay: '0.2s'}}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">Active Borrowers</h3>
          <div className="p-2 rounded-lg bg-purple/10">
            <UsersIcon className="w-4 h-4 text-purple" />
          </div>
        </div>
        <p className="text-3xl font-bold mb-1">8,234</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-warning font-medium">↑ 5.7%</span>
          <span className="text-xs text-muted-foreground">growth rate</span>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-lg animate-slide-up protocol-stat" style={{animationDelay: '0.3s'}}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">Collateral Ratio</h3>
          <div className="p-2 rounded-lg bg-zkBlue/10">
            <ShieldCheckIcon className="w-4 h-4 text-zkBlue" />
          </div>
        </div>
        <p className="text-3xl font-bold mb-1">158.2%</p>
        <div className="flex items-center gap-2">
          <LockIcon className="w-3 h-3 text-success" />
          <span className="text-xs text-success font-medium">Healthy & ZK-Secured</span>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
