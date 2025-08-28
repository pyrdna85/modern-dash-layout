import { useState } from "react";
import { 
  Home, 
  BarChart3, 
  Users, 
  Settings, 
  FileText, 
  Calendar,
  MessageSquare,
  Briefcase,
  TrendingUp 
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Análise", url: "/analytics", icon: BarChart3 },
  { title: "Projetos", url: "/projects", icon: Briefcase },
  { title: "Equipe", url: "/team", icon: Users },
  { title: "Relatórios", url: "/reports", icon: FileText },
];

const secondaryNavItems = [
  { title: "Calendário", url: "/calendar", icon: Calendar },
  { title: "Mensagens", url: "/messages", icon: MessageSquare },
  { title: "Tendências", url: "/trends", icon: TrendingUp },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  const getNavClassName = (path: string) => {
    return isActive(path)
      ? "bg-dashboard-active text-primary-foreground font-medium shadow-soft"
      : "text-muted-foreground hover:bg-dashboard-hover hover:text-foreground transition-smooth";
  };

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} transition-smooth border-r border-dashboard-border bg-dashboard-surface`}>
      <SidebarHeader className="p-4 border-b border-dashboard-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-bold text-foreground">DashPro</h2>
              <p className="text-xs text-muted-foreground">Gestão Inteligente</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupLabel className={`text-xs font-semibold text-muted-foreground uppercase tracking-wider ${collapsed ? "sr-only" : ""}`}>
            Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${getNavClassName(item.url)}`}
                      title={collapsed ? item.title : undefined}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className={`text-xs font-semibold text-muted-foreground uppercase tracking-wider ${collapsed ? "sr-only" : ""}`}>
            Ferramentas
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${getNavClassName(item.url)}`}
                      title={collapsed ? item.title : undefined}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}