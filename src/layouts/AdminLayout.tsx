import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Search, Bell, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const AdminLayout = () => {
  useEffect(() => {
    document.body.classList.add("admin-mode");
    return () => {
      document.body.classList.remove("admin-mode");
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-[hsl(var(--admin-bg))]">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-[hsl(var(--admin-border))] bg-[hsl(var(--admin-card))] flex items-center justify-between px-8">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <Search className="w-5 h-5 text-[hsl(var(--admin-muted))]" />
            <Input 
              placeholder="Search..." 
              className="bg-[hsl(var(--admin-bg))] border-[hsl(var(--admin-border))] text-[hsl(var(--admin-text))] placeholder:text-[hsl(var(--admin-muted))]"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-[hsl(var(--admin-bg))] transition-colors">
              <Bell className="w-5 h-5 text-[hsl(var(--admin-muted))]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[hsl(var(--admin-accent))] rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-4 border-l border-[hsl(var(--admin-border))]">
              <div className="text-right">
                <p className="text-sm font-medium text-[hsl(var(--admin-text))]">Admin User</p>
                <p className="text-xs text-[hsl(var(--admin-muted))]">admin@zklend.io</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--admin-accent))] flex items-center justify-center">
                <span className="text-white font-bold">AU</span>
              </div>
              <ChevronDown className="w-4 h-4 text-[hsl(var(--admin-muted))]" />
            </div>
          </div>
        </header>
        
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
