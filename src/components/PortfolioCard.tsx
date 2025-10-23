import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { ShieldIcon } from "lucide-react";

// Mock data for lending/borrowing positions over time
const positionData = [
  { month: 'Jan', lending: 245, borrowing: 180, collateral: 320 },
  { month: 'Feb', lending: 312, borrowing: 210, collateral: 385 },
  { month: 'Mar', lending: 289, borrowing: 195, collateral: 360 },
  { month: 'Apr', lending: 378, borrowing: 245, collateral: 425 },
  { month: 'May', lending: 445, borrowing: 290, collateral: 510 },
  { month: 'Jun', lending: 512, borrowing: 325, collateral: 580 },
];

const PortfolioCard = () => {
  return (
    <div className="glass-card p-6 rounded-lg mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Your Positions & Collateral</h2>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10">
          <ShieldIcon className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary">ZK Protected</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-success/10 to-success/5">
          <p className="text-sm text-muted-foreground mb-1">Total Lent</p>
          <p className="text-2xl font-bold text-success">$512K</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-warning/10 to-warning/5">
          <p className="text-sm text-muted-foreground mb-1">Total Borrowed</p>
          <p className="text-2xl font-bold text-warning">$325K</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
          <p className="text-sm text-muted-foreground mb-1">Collateral</p>
          <p className="text-2xl font-bold text-primary">$580K</p>
        </div>
      </div>

      <div className="w-full h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={positionData}>
            <XAxis 
              dataKey="month" 
              stroke="#475569"
              fontSize={12}
            />
            <YAxis 
              stroke="#475569"
              fontSize={12}
              tickFormatter={(value) => `$${value}K`}
            />
            <Tooltip 
              contentStyle={{ 
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '8px'
              }}
              labelStyle={{ color: '#0F172A' }}
              formatter={(value) => `$${value}K`}
            />
            <Legend />
            <Bar dataKey="lending" fill="#10B981" radius={[4, 4, 0, 0]} name="Lending" />
            <Bar dataKey="borrowing" fill="#F59E0B" radius={[4, 4, 0, 0]} name="Borrowing" />
            <Bar dataKey="collateral" fill="#6366F1" radius={[4, 4, 0, 0]} name="Collateral" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioCard;
