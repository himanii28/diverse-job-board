
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Briefcase, Building, Search, Users, LogIn, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Job Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className={location.pathname === "/" ? "font-semibold text-primary" : ""}>
                    <span className="mr-2"><Briefcase size={20} /></span>
                    Jobs
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/companies" className={location.pathname.startsWith("/companies") ? "font-semibold text-primary" : ""}>
                    <span className="mr-2"><Building size={20} /></span>
                    Companies
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/jobs" className={location.pathname.startsWith("/jobs") ? "font-semibold text-primary" : ""}>
                    <span className="mr-2"><Search size={20} /></span>
                    Browse Jobs
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/login" className={location.pathname === "/login" ? "font-semibold text-primary" : ""}>
                    <span className="mr-2"><LogIn size={20} /></span>
                    Login
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/signup" className={location.pathname === "/signup" ? "font-semibold text-primary" : ""}>
                    <span className="mr-2"><User size={20} /></span>
                    Sign Up
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="text-xs text-muted-foreground px-4 pb-4">
          &copy; {new Date().getFullYear()} Job Portal
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
