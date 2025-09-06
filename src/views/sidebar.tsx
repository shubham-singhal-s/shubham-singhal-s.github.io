import { useTheme } from "@/components/theme-provider";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  Building,
  GraduationCap,
  Home,
  Info,
  Moon,
  Sun,
  TrendingUp,
} from "lucide-react";
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
  const { open, isMobile, setOpenMobile } = useSidebar();
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    if (isMobile && open) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-col items-start pt-2 pl-2 pb-0">
          <p className="text-lg font-semibold">Shubham Singhal</p>
          <p className="text-sm text-muted-foreground">Full Stack | AI</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Browse Manually</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton onClick={handleClick} asChild>
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
      <SidebarFooter>
        <SidebarMenuButton
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="flex items-center gap-2 cursor-pointer hover:cursor-pointer"
        >
          {theme === "light" ? <Sun /> : <Moon />}
          <span>Switch Theme</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
