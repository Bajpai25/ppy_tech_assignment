"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Active", value: 3824, color: "#DC2626" },
  { name: "Inactive", value: 541, color: "#F97316" },
  { name: "Online", value: 60, color: "#EAB308" },
  { name: "New", value: 2, color: "#16A34A" },
]

const COLORS = ["#DC2626", "#F97316", "#EAB308", "#16A34A"]

export function ClientsChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: "12px" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
