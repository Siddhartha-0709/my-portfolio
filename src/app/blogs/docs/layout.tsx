import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ResponsiveSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <ResponsiveSidebar />
      <main className="pl-0 pt-10 md:pl-64 bg-white">  {/* Add left padding for desktop */}
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}