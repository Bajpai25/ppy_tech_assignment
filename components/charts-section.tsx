import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClientsChart } from "@/components/charts/clients-chart"
import { SipBusinessChart } from "@/components/charts/sip-business-chart"
import { MonthlyMisChart } from "@/components/charts/monthly-mis-chart"

export function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Clients Chart */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">CLIENTS</CardTitle>
          <Button variant="outline" size="sm" className="text-red-600 border-red-600 bg-transparent">
            📥 Download Report
          </Button>
        </CardHeader>
        <CardContent>
          <ClientsChart />
        </CardContent>
      </Card>

      {/* SIP Business Chart */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">SIP BUSINESS CHART</CardTitle>
          <Button variant="outline" size="sm" className="text-red-600 border-red-600 bg-transparent">
            View Report
          </Button>
        </CardHeader>
        <CardContent>
          <SipBusinessChart />
        </CardContent>
      </Card>

      {/* Monthly MIS Chart */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">MONTHLY MIS</CardTitle>
          <Button variant="outline" size="sm" className="text-red-600 border-red-600 bg-transparent">
            View Report
          </Button>
        </CardHeader>
        <CardContent>
          <MonthlyMisChart />
        </CardContent>
      </Card>
    </div>
  )
}
