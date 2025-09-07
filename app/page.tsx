"use client" // Added use client directive to enable event handler passing

import { Header } from "@/components/header"
import { NavigationBar } from "@/components/navigation-bar"
import { MainCards } from "@/components/main-cards"
import { TimeFilter } from "@/components/time-filter"
import { StatsCards } from "@/components/stats-cards"
import { ChartsSection } from "@/components/charts-section"

export default function Dashboard() {
  const handleFilterChange = async (days: number) => {
    console.log(` Fetching data for ${days} days`)
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log(` Data fetched successfully for ${days} days`)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NavigationBar />
      <main className="p-4 space-y-6">
        <MainCards />
        <TimeFilter onFilterChange={handleFilterChange} />
        <StatsCards />
        <ChartsSection />
      </main>
    </div>
  )
}
