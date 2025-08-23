import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Building, GraduationCap, Home, Info, TrendingUp } from "lucide-react";
import { Link } from "react-router";

const items = [
  {
    title: "Home",
    url: "",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
  },
  {
    title: "Experience",
    url: "/experience",
    icon: Building,
  },
  {
    title: "Skills",
    url: "/skills",
    icon: TrendingUp,
  },
  {
    title: "Education",
    url: "/education",
    icon: GraduationCap,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Browse Manually</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
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
