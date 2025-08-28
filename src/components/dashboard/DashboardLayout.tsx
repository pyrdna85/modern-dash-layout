import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardFooter } from "./DashboardFooter";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-dashboard-bg flex w-full">
        <DashboardSidebar />
        
        <div className="flex flex-col flex-1 min-w-0">
          <DashboardHeader />
          
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
          
          <DashboardFooter />
        </div>
      </div>
    </SidebarProvider>
  );
}