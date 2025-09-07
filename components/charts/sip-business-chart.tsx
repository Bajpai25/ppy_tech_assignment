"use client"

import { ComposedChart, Bar, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { month: "Mar", bar: 1.6, line: 2.0 },
  { month: "Apr", bar: 1.4, line: 1.8 },
  { month: "May", bar: 1.6, line: 0.2 },
  { month: "Jun", bar: 1.5, line: 1.4 },
]

export function SipBusinessChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="month" />
          <YAxis />
          <Bar dataKey="bar" fill="#3B82F6" />
          <Line type="monotone" dataKey="line" stroke="#DC2626" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
