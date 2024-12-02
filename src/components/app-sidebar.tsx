// 'use client'

// import { useState } from "react"
// import Link from "next/link"
// import { Calendar, Home, Inbox, Search, Settings, ChevronDown, Briefcase, Users, FileText, BarChart } from "lucide-react"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar"

// // Menu items with random submenus
// const items = [
//   {
//     title: "Home",
//     url: "/blogs/docs",
//     icon: Home,
//   },
//   {
//     title: "C++",
//     url: "/blogs/docs/cpp?topicName=full",
//     icon: Home,
//   },
//   // {
//   //   title: "DevOps Stuffs",
//   //   url: "/blogs/docs/devops",
//   //   icon: Home,
//   //   submenu: [
//   //     { title: "Introduction", url: "/blogs/docs/cpp?topicName=introduction" },
//   //     { title: "Analytics", url: "#analytics" },
//   //   ],
//   // }
// ]

// export function AppSidebar() {
//   return (
//     <Sidebar  className="bg-black">
//       <SidebarContent className="bg-black">
//         <SidebarGroup>
//           <SidebarGroupLabel className="text-2xl text-orange-600 font-bold mb-10">
//             <Link href="/blogs/docs">Siddhartha</Link>
//           </SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => (
//                 <MenuItem key={item.title} item={item} />
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   )
// }

// function MenuItem({ item }) {
//   const [isOpen, setIsOpen] = useState(false)
//   if (!item.submenu) {
//     return (
//       <SidebarMenuItem>
//         <SidebarMenuButton asChild>
//           <Link href={item.url} className="flex items-center">
//             {/* <item.icon className="mr-2 h-4 w-4" /> */}
//             <span>{item.title}</span>
//           </Link>
//         </SidebarMenuButton>
//       </SidebarMenuItem>
//     )
//   }

//   return (
//     <SidebarMenuItem>
//       <div className="flex flex-col">
//         <SidebarMenuButton
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center justify-between"
//         >
//           <div className="flex items-center">
//             {/* <item.icon className="mr-2 h-4 w-4" /> */}
//             <span>{item.title}</span>
//           </div>
//           <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//         </SidebarMenuButton>
//         {isOpen && (
//           <div className="ml-6 mt-2 space-y-1">
//             {item.submenu.map((subitem) => (
//               <SidebarMenuButton key={subitem.title} asChild className="w-full">
//                 <Link href={subitem.url}>{subitem.title}</Link>
//               </SidebarMenuButton>
//             ))}
//           </div>
//         )}
//       </div>
//     </SidebarMenuItem>
//   )
// }

'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, ChevronDown } from "lucide-react"
import { 
  Drawer, 
  DrawerClose, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger 
} from "@/components/ui/drawer"
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, 
} from "@/components/ui/sidebar"

// Define menu items with potential submenus
const menuItems = [
  {
    title: "Home",
    url: "/blogs/docs",
    icon: Home,
  },
  {
    title: "C++ Resources",
    url: "/blogs/docs/cpp?topicName=full",
    icon: Home,
    // submenu: [
    //   { title: "Introduction", url: "/blogs/docs/cpp/introduction" },
    //   { title: "Advanced Topics", url: "/blogs/docs/cpp/advanced" }
    // ]
  },
  {
    title: "AWS",
    url: "/blogs/docs",
    icon: Home,
    submenu: [
      { title: "EC2", url: "/blogs/docs/AWS?topicName=EC2" },
    ]
  }
]

export function ResponsiveSidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      {/* Mobile Header & Drawer - Visible on small screens */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black p-4 flex justify-between items-center">
        <Link href="/blogs/docs" className="text-2xl text-orange-600 font-bold">
          Siddhartha
        </Link>
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger>
            <Menu className="text-white" />
          </DrawerTrigger>
          <DrawerContent className="bg-black text-white">
            <DrawerHeader>
              <DrawerTitle className="text-orange-600">Menu</DrawerTitle>
              <DrawerClose className="absolute top-4 right-4">
                <X className="text-white" />
              </DrawerClose>
            </DrawerHeader>
            <div className="p-4">
              <SidebarMenu>
                {menuItems.map((item) => (
                  <MobileMenuItem 
                    key={item.title} 
                    item={item} 
                    onClose={() => setIsDrawerOpen(false)}
                  />
                ))}
              </SidebarMenu>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Sidebar - Hidden on small screens */}
      <div className="hidden md:block fixed left-0 top-0 h-full">
        <Sidebar className="bg-black h-full">
          <SidebarContent className="bg-black">
            <SidebarGroup>
              <div className="text-2xl text-orange-600 font-bold mb-10 pl-4 py-4">
                <Link href="/blogs/docs">Siddhartha</Link>
              </div>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <MenuItem key={item.title} item={item} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </>
  )
}

function MobileMenuItem({ item, onClose }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  if (!item.submenu) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link 
            href={item.url} 
            className="flex items-center justify-between w-full"
            onClick={onClose}
          >
            <div className="flex items-center">
              {/* {item.icon && <item.icon className="mr-2 h-4 w-4" />} */}
              <span>{item.title}</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <div className="flex flex-col">
        <SidebarMenuButton
          onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center">
            {/* {item.icon && <item.icon className="mr-2 h-4 w-4" />} */}
            <span>{item.title}</span>
          </div>
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} 
          />
        </SidebarMenuButton>
        
        {isSubmenuOpen && (
          <div className="ml-6 mt-2 space-y-1">
            {item.submenu.map((subitem) => (
              <SidebarMenuButton 
                key={subitem.title} 
                asChild 
                className="w-full"
              >
                <Link 
                  href={subitem.url} 
                  onClick={onClose}
                  className="block w-full"
                >
                  {subitem.title}
                </Link>
              </SidebarMenuButton>
            ))}
          </div>
        )}
      </div>
    </SidebarMenuItem>
  )
}

function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!item.submenu) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href={item.url} className="flex items-center">
            {/* {item.icon && <item.icon className="mr-2 h-4 w-4" />} */}
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <div className="flex flex-col">
        <SidebarMenuButton
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between"
        >
          <div className="flex items-center">
            {/* {item.icon && <item.icon className="mr-2 h-4 w-4" />} */}
            <span>{item.title}</span>
          </div>
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          />
        </SidebarMenuButton>
        {isOpen && (
          <div className="ml-6 mt-2 space-y-1">
            {item.submenu.map((subitem) => (
              <SidebarMenuButton 
                key={subitem.title} 
                asChild 
                className="w-full"
              >
                <Link href={subitem.url}>{subitem.title}</Link>
              </SidebarMenuButton>
            ))}
          </div>
        )}
      </div>
    </SidebarMenuItem>
  )
}

export default ResponsiveSidebar