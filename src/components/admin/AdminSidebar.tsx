import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  Shield, 
  Wallet, 
  Users, 
  Home,
  ChevronRight
} from "lucide-react";

const AdminSidebar = () => {
  const menuItems = [
    { path: "/", icon: Home, label: "User Dashboard" },
    { path: "/admin", icon: LayoutDashboard, label: "Admin Dashboard" },
    { path: "/admin/statistics", icon: BarChart3, label: "Statistics" },
    { path: "/admin/security", icon: Shield, label: "ZK Security" },
    { path: "/admin/payouts", icon: Wallet, label: "Payouts" },
  ];

  return (
    <div className="admin-sidebar w-64 min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-[hsl(var(--admin-text))] mb-1">
          ZK Lend Admin
        </h1>
        <p className="text-sm text-[hsl(var(--admin-muted))]">Protocol Management</p>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/" || item.path === "/admin"}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-lg transition-all
              ${isActive 
                ? 'bg-[hsl(var(--admin-accent))] text-white shadow-lg' 
                : 'text-[hsl(var(--admin-muted))] hover:bg-[hsl(var(--admin-card))] hover:text-[hsl(var(--admin-text))]'
              }
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
            <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
          </NavLink>
        ))}
      </nav>
      
      <div className="pt-6 border-t border-[hsl(var(--admin-border))]">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-[hsl(var(--admin-accent))] flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-[hsl(var(--admin-text))]">Admin User</p>
            <p className="text-xs text-[hsl(var(--admin-muted))]">admin@zklend.io</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
