"use client"

import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", value1: 0.2, value2: -0.1, value3: 0.3 },
  { month: "Feb", value1: 0.3, value2: 0.1, value3: 0.4 },
  { month: "Mar", value1: 0.25, value2: 0.05, value3: 0.35 },
  { month: "Apr", value1: 0.4, value2: 0.2, value3: 0.5 },
  { month: "May", value1: 0.35, value2: 0.15, value3: 0.45 },
  { month: "Jun", value1: 0.2, value2: -0.05, value3: 0.3 },
]

export function MonthlyMisChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="month" />
          <YAxis />
          <Area type="monotone" dataKey="value1" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
          <Area type="monotone" dataKey="value2" stackId="1" stroke="#DC2626" fill="#DC2626" fillOpacity={0.6} />
          <Area type="monotone" dataKey="value3" stackId="1" stroke="#16A34A" fill="#16A34A" fillOpacity={0.6} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
