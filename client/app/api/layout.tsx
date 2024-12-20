import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

import { Nav } from "@/components/shared/nav";
import * as LucideIcons from "lucide-react";
interface Links {
  label: string;
  href: string;
  icon?: keyof typeof LucideIcons;
}

const links: Links[] = [
  { label: "Dashboard", href: "/home", icon: "LayoutDashboard" },
  { label: "Overview", href: "#" },
  { label: "Get Started", href: "#" },
  { label: "Twitter", href: "/api/twitter" },
  { label: "Instagram", href: "/api/instagram" },
  { label: "Facebook", href: "/api/facebook" },
];
const ClientSidebar = dynamic(() => import("../home/ClientSidebar"), {
  ssr: false,
});

interface NavLinks {
  label: string;
  href: string;
}

const navlinks: NavLinks[] = [
  // { label: "Dashboard", href: "#" },
  // { label: "Profile", href: "#" },
  // { label: "Settings", href: "#" },
  // { label: "Logout", href: "#" },
  // { label: "API", href: "/api" },
];

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 min-h-screen mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden h-screen">
      <ClientSidebar links={links} />
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 min-h-screen mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "h-screen"
        )}
      >
        <div className="flex flex-1">
          <div className="bg-background w-full">
            <Nav links={navlinks} />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
