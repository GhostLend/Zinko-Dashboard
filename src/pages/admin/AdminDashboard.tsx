import { TrendingUp, Users, Wallet, Shield, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const AdminDashboard = () => {
  const stats = [
    { 
      title: "Total Value Locked", 
      value: "$842.5M", 
      change: "+12.4%", 
      positive: true, 
      icon: TrendingUp,
      delay: "0s"
    },
    { 
      title: "Active Users", 
      value: "21,081", 
      change: "+8.2%", 
      positive: true, 
      icon: Users,
      delay: "0.1s"
    },
    { 
      title: "Daily Transactions", 
      value: "3,247", 
      change: "-2.1%", 
      positive: false, 
      icon: Wallet,
      delay: "0.2s"
    },
    { 
      title: "ZK Proofs Generated", 
      value: "15,642", 
      change: "+18.7%", 
      positive: true, 
      icon: Shield,
      delay: "0.3s"
    },
  ];

  const tvlData = [
    { month: "Jan", value: 620 },
    { month: "Feb", value: 680 },
    { month: "Mar", value: 720 },
    { month: "Apr", value: 750 },
    { month: "May", value: 790 },
    { month: "Jun", value: 842 },
  ];

  const activityData = [
    { day: "Mon", lends: 420, borrows: 380 },
    { day: "Tue", lends: 380, borrows: 420 },
    { day: "Wed", lends: 520, borrows: 480 },
    { day: "Thu", lends: 480, borrows: 520 },
    { day: "Fri", lends: 620, borrows: 580 },
    { day: "Sat", lends: 580, borrows: 620 },
    { day: "Sun", lends: 520, borrows: 480 },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="animate-slide-in-left">
        <h1 className="text-3xl font-bold text-[hsl(var(--admin-text))] mb-2">Dashboard Overview</h1>
        <p className="text-[hsl(var(--admin-muted))]">Monitor your ZK Lend Protocol performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.title}
            className="admin-card p-6 animate-slide-in-left"
            style={{ animationDelay: stat.delay }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-[hsl(var(--admin-accent))]/10">
                <stat.icon className="w-6 h-6 text-[hsl(var(--admin-accent))]" />
              </div>
              <span className={`flex items-center gap-1 text-sm font-medium ${
                stat.positive ? 'text-[hsl(var(--admin-success))]' : 'text-[hsl(var(--admin-warning))]'
              }`}>
                {stat.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm text-[hsl(var(--admin-muted))] mb-2">{stat.title}</h3>
            <p className="text-3xl font-bold text-[hsl(var(--admin-text))] animate-count-up">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="admin-card p-6">
          <h3 className="text-xl font-bold text-[hsl(var(--admin-text))] mb-6">TVL Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={tvlData}>
              <defs>
                <linearGradient id="tvlGradient" x1="0" y1="0" x2="0" y2="1">
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
              <Area type="monotone" dataKey="value" stroke="hsl(263, 70%, 65%)" fillOpacity={1} fill="url(#tvlGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="admin-card p-6">
          <h3 className="text-xl font-bold text-[hsl(var(--admin-text))] mb-6">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
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
              <Bar dataKey="lends" fill="hsl(142, 71%, 45%)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="borrows" fill="hsl(263, 70%, 65%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
