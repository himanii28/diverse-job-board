
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
import { briefcase, building, search, users } from "lucide-react";
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
                    <span className="mr-2"><briefcase size={20} /></span>
                    Jobs
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/companies" className={location.pathname.startsWith("/companies") ? "font-semibold text-primary" : ""}>
                    <span className="mr-2"><building size={20} /></span>
                    Companies
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/jobs" className={location.pathname.startsWith("/jobs") ? "font-semibold text-primary" : ""}>
                    <span className="mr-2"><search size={20} /></span>
                    Browse Jobs
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2"><users size={20} /></span>
                    About
                  </a>
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
