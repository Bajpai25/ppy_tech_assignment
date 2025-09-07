import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"

export function MainCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* AUM Card */}
      <Card className="p-6">
        <CardContent className="p-0">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Current</p>
              <h2 className="text-3xl font-bold text-gray-900">
                AUM 12.19 <span className="text-lg">Cr</span>
              </h2>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+0.77% MoM</span>
              </div>
            </div>
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent">
              View Report
            </Button>
          </div>
          <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
            View Trend ▼
          </Button>
        </CardContent>
      </Card>

      {/* SIP Card */}
      <Card className="p-6">
        <CardContent className="p-0">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Current</p>
              <h2 className="text-3xl font-bold text-gray-900">
                SIP 1.39 <span className="text-lg">Lakh</span>
              </h2>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm">+0% MoM</span>
              </div>
            </div>
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent">
              View Report
            </Button>
          </div>
          <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
            View Trend ▼
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
