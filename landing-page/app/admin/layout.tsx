// app/admin/layout.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  Building2,
  LogOut,
  User
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans"> {/* TAMBAHKAN font-sans di sini */}
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-indigo-600">Affiliate Hub OS</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link 
            href="/admin/dashboard" 
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-indigo-50 text-indigo-700 font-medium text-sm transition-colors"
          >
            <LayoutDashboard className="h-4 w-4" />
            Overview
          </Link>
          
          <Link 
            href="/admin/campaigns" 
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors"
          >
            <FileText className="h-4 w-4" />
            Landing Pages
          </Link>
          
          <Link 
            href="/admin/merchants" 
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors"
          >
            <Building2 className="h-4 w-4" />
            Merchants
          </Link>
        </nav>
        
        <div className="p-4 border-t border-gray-200 space-y-2">
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600">
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">Admin User</span>
          </div>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 mr-3" />
            Logout
          </Button>
          <div className="text-xs text-gray-400 text-center pt-2">
            Admin Panel v1.0
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                3
              </span>
              <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </Button>
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
              A
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8 bg-gray-50">
          {children}
        </div>
      </main>
    </div>
  );
}