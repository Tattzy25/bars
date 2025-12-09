"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconCode,
  IconTags,
  IconBuildingStore,
  IconLayout,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Bridgit User",
    email: "user@bridgit-ai.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Search Analytics",
      url: "/dashboard/analytics",
      icon: IconChartBar,
    },
    {
      title: "Widget Manager",
      url: "/dashboard/widgets",
      icon: IconCode,
    },
    {
      title: "Site Settings",
      url: "/dashboard/sites",
      icon: IconSettings,
    },
  ],
  navClouds: [
    {
      title: "Search Widgets",
      icon: IconSearch,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Widgets",
          url: "/dashboard/widgets/active",
        },
        {
          title: "Widget Styles",
          url: "/dashboard/widgets/styles",
        },
        {
          title: "Embed Codes",
          url: "/dashboard/widgets/embed",
        },
      ],
    },
    {
      title: "Analytics",
      icon: IconChartBar,
      url: "#",
      items: [
        {
          title: "Search Queries",
          url: "/dashboard/analytics/queries",
        },
        {
          title: "Click-through Rates",
          url: "/dashboard/analytics/ctr",
        },
        {
          title: "Popular Searches",
          url: "/dashboard/analytics/popular",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
  ],
  projects: [
    {
      name: "My Website Search",
      url: "#",
      icon: IconSearch,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/">
                <IconSearch className="!size-5" />
                <span className="text-base font-semibold">Bridgit-AI</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
