import { Button } from "@/components/ui/button"

const menuItems = [
  "HOME",
  "CRM",
  "UTILITIES",
  "INSURANCE",
  "ASSETS",
  "MUTUAL",
  "RESEARCH",
  "TRANSACT ONLINE",
  "GOAL GPS",
  "FINANCIAL PLANNING",
  "WEALTH REPORT",
  "OTHER",
]

export function NavigationBar() {
  return (
    <nav className="bg-red-600 px-4 py-2">
      <div className="flex items-center space-x-6 overflow-x-auto">
        {menuItems.map((item) => (
          <Button
            key={item}
            variant="ghost"
            className="text-white hover:bg-red-700 whitespace-nowrap text-sm font-medium"
          >
            {item}
          </Button>
        ))}
      </div>
    </nav>
  )
}
