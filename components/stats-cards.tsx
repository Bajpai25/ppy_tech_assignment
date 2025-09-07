import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, RotateCcw, AlertTriangle, XCircle, Plus } from "lucide-react"

const statsData = [
  {
    title: "Purchases",
    value: "0",
    amount: "0.00 INR",
    icon: ShoppingCart,
    color: "text-red-600",
  },
  {
    title: "Redemptions",
    value: "0",
    amount: "0.00 INR",
    icon: RotateCcw,
    color: "text-orange-600",
  },
  {
    title: "Rejected Transactions",
    value: "0",
    amount: "0.00 INR",
    icon: AlertTriangle,
    color: "text-gray-600",
  },
  {
    title: "SIP Rejections",
    value: "0",
    amount: "0.00 INR",
    icon: XCircle,
    color: "text-red-600",
  },
  {
    title: "New SIP",
    value: "0",
    amount: "0.00 INR",
    icon: Plus,
    color: "text-gray-600",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {statsData.map((stat, index) => (
        <Card key={stat.title} className="p-4">
          <CardContent className="p-0">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              {index < 2 && (
                <Button variant="outline" size="sm" className="text-red-600 border-red-600 bg-transparent">
                  View Report
                </Button>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
            <p className="text-sm text-gray-500">{stat.amount}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
