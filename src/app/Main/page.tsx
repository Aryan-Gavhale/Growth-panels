'use client'
import React from "react"
import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Grid, Heart, Users, PenTool, PlayCircle, Settings, Menu, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function Growth() {
  const [activeTab, setActiveTab] = useState("Social Media")

  const tabs = [
    "Social Media",
    "Referral",
    "Content Creation",
    "Reviews",
  ]
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar */}
      <aside className="w-16 border-r border-gray-200 bg-white flex flex-col items-center py-4 space-y-6">
            <nav className="space-y-6">
              <Link href="/menu" className="block">
                <Menu className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href="/" className="block">
                <Grid className="w-6 h-6 text-[#6366F1]" />
              </Link>
              <Link href="/favorites" className="block">
                <Heart className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href="/users" className="block">
                <Users className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href="/edit" className="block">
                <PenTool className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href="/play" className="block">
                <PlayCircle className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href="/settings" className="block">
                <Settings className="w-6 h-6 text-gray-400" />
              </Link>
            </nav>
          </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-semibold">Inbox</h1>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search here..."
                className="w-[240px] pl-9 py-2 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Ramesh</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

         {/* Tabs */}
         <div className="px-8 pt-4">
          <nav className="flex gap-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-1 pb-4 text-sm font-medium relative",
                  activeTab === tab
                    ? "text-gray-900 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Table */}
        <div className="px-8 py-6">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4 font-medium">Type</th>
                <th className="pb-4 font-medium">Customer</th>
                <th className="pb-4 font-medium">Submission</th>
                <th className="pb-4 font-medium">Reward</th>
                <th className="pb-4 font-medium">
                  <div className="flex items-center gap-1">
                    Date
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </th>
                <th className="pb-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="text-center py-8 text-gray-500">
                  No results found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 w-12 h-12 bg-black rounded-full flex items-center justify-center cursor-pointer">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.418 16.97 20 12 20C10.5 20 9.077 19.692 7.8 19.14L3 20L4.3 15.9C3.486 14.664 3 13.246 3 12C3 7.582 7.03 4 12 4C16.97 4 21 7.582 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}