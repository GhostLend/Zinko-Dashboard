import { DollarSign, TrendingUp, TrendingDown, Download, MoreVertical } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Payouts = () => {
  const payoutStats = [
    { title: "Current Earning", value: "$45,678", change: "+20.1%", positive: true },
    { title: "Total Refund", value: "$3,456", change: "-5.2%", positive: false },
    { title: "Interest Paid", value: "$89,234", change: "+15.8%", positive: true },
    { title: "Fees Collected", value: "$12,567", change: "+8.3%", positive: true },
  ];

  const transactions = [
    { 
      id: "TX001", 
      user: "John Doe", 
      email: "john@example.com", 
      type: "Lend Interest", 
      date: "2025-10-20", 
      amount: "$459" 
    },
    { 
      id: "TX002", 
      user: "Jane Smith", 
      email: "jane@example.com", 
      type: "Borrow Fee", 
      date: "2025-10-19", 
      amount: "$1,299" 
    },
    { 
      id: "TX003", 
      user: "Bob Johnson", 
      email: "bob@example.com", 
      type: "Liquidation", 
      date: "2025-10-18", 
      amount: "$3,499" 
    },
    { 
      id: "TX004", 
      user: "Alice Brown", 
      email: "alice@example.com", 
      type: "Platform Fee", 
      date: "2025-10-17", 
      amount: "$899" 
    },
    { 
      id: "TX005", 
      user: "Charlie Wilson", 
      email: "charlie@example.com", 
      type: "Lend Interest", 
      date: "2025-10-16", 
      amount: "$2,199" 
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="animate-slide-in-left">
        <h1 className="text-3xl font-bold text-[hsl(var(--admin-text))] mb-2">Payouts</h1>
        <p className="text-[hsl(var(--admin-muted))]">Track protocol earnings and transaction payouts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {payoutStats.map((stat, index) => (
          <div
            key={stat.title}
            className="admin-card p-6 animate-slide-in-left"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-[hsl(var(--admin-muted))]">{stat.title}</h3>
              {stat.positive ? (
                <TrendingUp className="w-4 h-4 text-[hsl(var(--admin-success))]" />
              ) : (
                <TrendingDown className="w-4 h-4 text-[hsl(var(--admin-warning))]" />
              )}
            </div>
            <p className="text-3xl font-bold text-[hsl(var(--admin-text))] mb-2 animate-count-up">{stat.value}</p>
            <span className={`text-sm font-medium ${
              stat.positive ? 'text-[hsl(var(--admin-success))]' : 'text-[hsl(var(--admin-warning))]'
            }`}>
              {stat.change} from last period
            </span>
          </div>
        ))}
      </div>

      <div className="admin-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[hsl(var(--admin-text))]">Transaction History</h3>
          <Button className="bg-[hsl(var(--admin-accent))] hover:bg-[hsl(var(--admin-accent))]/90 text-white">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-[hsl(var(--admin-border))]">
                <TableHead className="text-[hsl(var(--admin-muted))]">Transaction ID</TableHead>
                <TableHead className="text-[hsl(var(--admin-muted))]">User</TableHead>
                <TableHead className="text-[hsl(var(--admin-muted))]">Email ID</TableHead>
                <TableHead className="text-[hsl(var(--admin-muted))]">Type</TableHead>
                <TableHead className="text-[hsl(var(--admin-muted))]">Date</TableHead>
                <TableHead className="text-[hsl(var(--admin-muted))]">Amount</TableHead>
                <TableHead className="text-[hsl(var(--admin-muted))]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx, index) => (
                <TableRow 
                  key={tx.id} 
                  className="border-[hsl(var(--admin-border))] hover:bg-[hsl(var(--admin-card))]/50 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <TableCell className="font-medium text-[hsl(var(--admin-text))]">{tx.id}</TableCell>
                  <TableCell className="text-[hsl(var(--admin-text))]">{tx.user}</TableCell>
                  <TableCell className="text-[hsl(var(--admin-muted))]">{tx.email}</TableCell>
                  <TableCell>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--admin-accent))]/10 text-[hsl(var(--admin-accent))]">
                      {tx.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-[hsl(var(--admin-muted))]">{tx.date}</TableCell>
                  <TableCell className="font-semibold text-[hsl(var(--admin-text))]">{tx.amount}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-[hsl(var(--admin-accent))] hover:text-[hsl(var(--admin-accent))]/80 hover:bg-[hsl(var(--admin-accent))]/10"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Invoice
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-[hsl(var(--admin-muted))] hover:text-[hsl(var(--admin-text))] hover:bg-[hsl(var(--admin-card))]"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Payouts;
