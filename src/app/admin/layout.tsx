"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, LayoutDashboard, Package, Users, FileText, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const SIDEBAR_ITEMS = [
    { label: "Overview", icon: LayoutDashboard, href: "/admin/dashboard" },
    { label: "Inventory", icon: Package, href: "/admin/inventory" },
    { label: "Bookings", icon: FileText, href: "/admin/bookings" },
    { label: "Customers", icon: Users, href: "/admin/customers" },
    { label: "Settings", icon: Settings, href: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex h-screen bg-black overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-zinc-900/50 flex flex-col hidden lg:flex">
                <div className="h-16 flex items-center px-6 border-b border-white/10">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-primary/20 p-1.5 rounded-lg">
                            <Camera className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-bold text-white tracking-tight">CamRent Admin</span>
                    </Link>
                </div>

                <div className="flex-1 py-6 px-4 space-y-1">
                    {SIDEBAR_ITEMS.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start text-gray-400 hover:text-white hover:bg-white/5 mb-1",
                                    pathname === item.href && "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary"
                                )}
                            >
                                <item.icon className="h-4 w-4 mr-3" />
                                {item.label}
                            </Button>
                        </Link>
                    ))}
                </div>

                <div className="p-4 border-t border-white/10">
                    <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10">
                        <LogOut className="h-4 w-4 mr-3" /> Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto relative">
                <div className="h-16 border-b border-white/10 flex items-center justify-between px-8 bg-zinc-900/30 backdrop-blur-md sticky top-0 z-10">
                    <h2 className="text-sm font-medium text-gray-400">Dashboard / Overview</h2>
                    <div className="flex items-center space-x-4">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                            JD
                        </div>
                    </div>
                </div>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
