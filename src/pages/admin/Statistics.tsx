import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Users, TrendingUp, Lock, DollarSign } from "lucide-react";

const Statistics = () => {
  const userGrowthData = [
    { day: "Mon", users: 4200 },
    { day: "Tue", users: 3100 },
    { day: "Wed", users: 5200 },
    { day: "Thu", users: 4600 },
    { day: "Fri", users: 6100 },
    { day: "Sat", users: 6400 },
    { day: "Sun", users: 5500 },
  ];

  const lendersBorrowersData = [
    { month: "Jan", lenders: 8200, borrowers: 5400 },
    { month: "Feb", lenders: 9100, borrowers: 6200 },
    { month: "Mar", lenders: 10200, borrowers: 7100 },
    { month: "Apr", lenders: 11500, borrowers: 7800 },
    { month: "May", lenders: 12100, borrowers: 8000 },
    { month: "Jun", lenders: 12847, borrowers: 8234 },
  ];

  const collateralDistribution = [
    { name: "ETH", value: 45, color: "hsl(263, 70%, 65%)" },
    { name: "WBTC", value: 25, color: "hsl(142, 71%, 45%)" },
    { name: "USDC", value: 15, color: "hsl(221, 83%, 53%)" },
    { name: "DAI", value: 10, color: "hsl(38, 92%, 50%)" },
    { name: "Others", value: 5, color: "hsl(217, 10%, 60%)" },
  ];

  const stats = [
    { label: "Total Users", value: "21,081", icon: Users, color: "hsl(263, 70%, 65%)" },
    { label: "Active Lenders", value: "12,847", icon: TrendingUp, color: "hsl(142, 71%, 45%)" },
    { label: "Active Borrowers", value: "8,234", icon: DollarSign, color: "hsl(221, 83%, 53%)" },
    { label: "Collateral Locked", value: "$842.5M", icon: Lock, color: "hsl(38, 92%, 50%)" },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="animate-slide-in-left">
        <h1 className="text-3xl font-bold text-[hsl(var(--admin-text))] mb-2">Statistics & Analytics</h1>
        <p className="text-[hsl(var(--admin-muted))]">Detailed insights into protocol performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="admin-card p-6 animate-slide-in-left"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${stat.color}20` }}>
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div>
                <p className="text-sm text-[hsl(var(--admin-muted))]">{stat.label}</p>
                <p className="text-2xl font-bold text-[hsl(var(--admin-text))] animate-count-up">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="bg-[hsl(var(--admin-card))] border border-[hsl(var(--admin-border))]">
          <TabsTrigger value="users" className="data-[state=active]:bg-[hsl(var(--admin-accent))] data-[state=active]:text-white">
            User Analytics
          </TabsTrigger>
          <TabsTrigger value="lending" className="data-[state=active]:bg-[hsl(var(--admin-accent))] data-[state=active]:text-white">
            Lending & Borrowing
          </TabsTrigger>
          <TabsTrigger value="collateral" className="data-[state=active]:bg-[hsl(var(--admin-accent))] data-[state=active]:text-white">
            Collateral Distribution
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-6">
          <div className="admin-card p-6">
            <h3 className="text-xl font-bold text-[hsl(var(--admin-text))] mb-6">Active Users (Daily)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--admin-border))" />
                <XAxis dataKey="day" stroke="hsl(var(--admin-muted))" />
                <YAxis stroke="hsl(var(--admin-muted))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--admin-card))', 
                    border: '1px solid hsl(var(--admin-border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="hsl(221, 83%, 53%)" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(221, 83%, 53%)', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="lending" className="mt-6">
          <div className="admin-card p-6">
            <h3 className="text-xl font-bold text-[hsl(var(--admin-text))] mb-6">Lenders vs Borrowers Growth</h3>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={lendersBorrowersData}>
                <defs>
                  <linearGradient id="lendersGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="borrowersGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(263, 70%, 65%)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(263, 70%, 65%)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--admin-border))" />
                <XAxis dataKey="month" stroke="hsl(var(--admin-muted))" />
                <YAxis stroke="hsl(var(--admin-muted))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--admin-card))', 
                    border: '1px solid hsl(var(--admin-border))',
                    borderRadius: '8px'
                  }} 
                />
                <Area type="monotone" dataKey="lenders" stroke="hsl(142, 71%, 45%)" fillOpacity={1} fill="url(#lendersGradient)" />
                <Area type="monotone" dataKey="borrowers" stroke="hsl(263, 70%, 65%)" fillOpacity={1} fill="url(#borrowersGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="collateral" className="mt-6">
          <div className="admin-card p-6">
            <h3 className="text-xl font-bold text-[hsl(var(--admin-text))] mb-6">Collateral Asset Distribution</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={collateralDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {collateralDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--admin-card))', 
                      border: '1px solid hsl(var(--admin-border))',
                      borderRadius: '8px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
              {collateralDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-[hsl(var(--admin-text))]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Statistics;
