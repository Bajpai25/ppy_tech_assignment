import { Search, Bell, Star, Settings, User, Lock, Eye, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MobilePDFButton } from "@/components/mobile-pdf-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <div>
            <div className="text-blue-600 font-bold text-lg leading-none">Wealth</div>
            <div className="text-green-500 font-bold text-lg leading-none">Elite</div>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search portfolio"
              className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <MobilePDFButton />
          <ThemeToggle />
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Star className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Lock className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Eye className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600">
            <LogOut className="w-4 h-4 mr-1" />
            LOGOUT
          </Button>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>

      <div className="md:hidden mt-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search portfolio"
            className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-600"
          />
        </div>
      </div>
    </header>
  )
}
