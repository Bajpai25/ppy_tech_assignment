import { NextResponse } from "next/server"

export async function GET() {
  // Mock data for the dashboard
  const dashboardData = {
    aum: {
      current: 12.19,
      unit: "Cr",
      momChange: 0.77,
      trend: "up",
    },
    sip: {
      current: 1.39,
      unit: "Lakh",
      momChange: 0,
      trend: "neutral",
    },
    stats: {
      purchases: { count: 0, amount: 0 },
      redemptions: { count: 0, amount: 0 },
      rejectedTransactions: { count: 0, amount: 0 },
      sipRejections: { count: 0, amount: 0 },
      newSip: { count: 0, amount: 0 },
    },
    clients: {
      active: 3824,
      inactive: 541,
      online: 60,
      new: 2,
    },
    sipBusiness: [
      { month: "Mar", value: 1.6, target: 2.0 },
      { month: "Apr", value: 1.4, target: 1.8 },
      { month: "May", value: 1.6, target: 0.2 },
      { month: "Jun", value: 1.5, target: 1.4 },
    ],
    monthlyMis: [
      { month: "Jan", series1: 0.2, series2: -0.1, series3: 0.3 },
      { month: "Feb", series1: 0.3, series2: 0.1, series3: 0.4 },
      { month: "Mar", series1: 0.25, series2: 0.05, series3: 0.35 },
      { month: "Apr", series1: 0.4, series2: 0.2, series3: 0.5 },
      { month: "May", series1: 0.35, series2: 0.15, series3: 0.45 },
      { month: "Jun", series1: 0.2, series2: -0.05, series3: 0.3 },
    ],
  }

  return NextResponse.json(dashboardData)
}
