"use client"

import { useState } from "react"
import { Menu, X, Bell, Star, Settings, User, Lock, Eye, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobilePDFButton } from "@/components/mobile-pdf-button"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { icon: Bell, label: "Notifications" },
    { icon: Star, label: "Favorites" },
    { icon: Settings, label: "Settings" },
    { icon: User, label: "Profile" },
    { icon: Lock, label: "Security" },
    { icon: Eye, label: "View" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-lg leading-none">Wealth</div>
                <div className="text-green-500 font-bold text-lg leading-none">Elite</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 py-6">
            <div className="space-y-2">
              {/* PDF and Theme Toggle */}
              <div className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="text-sm font-medium">Download PDF</span>
                <MobilePDFButton />
              </div>
              <div className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="text-sm font-medium">Theme</span>
                <ThemeToggle />
              </div>

              {/* Navigation Items */}
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start py-3 px-3 h-auto"
                  onClick={() => setOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Logout */}
          <div className="border-t pt-4">
            <Button
              variant="ghost"
              className="w-full justify-start py-3 px-3 h-auto text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
              onClick={() => setOpen(false)}
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">Logout</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
