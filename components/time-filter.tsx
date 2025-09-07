"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const timeRanges = [
  { label: "3 Days", value: 3 },
  { label: "7 Days", value: 7 },
  { label: "10 Days", value: 10 },
  { label: "30 Days", value: 30 },
]

interface TimeFilterProps {
  onFilterChange?: (days: number) => Promise<void>
}

export function TimeFilter({ onFilterChange }: TimeFilterProps) {
  const [activeRange, setActiveRange] = useState("3 Days")
  const [loading, setLoading] = useState(false)

  const handleFilterClick = async (range: { label: string; value: number }) => {
    if (loading) return

    setLoading(true)
    setActiveRange(range.label)

    try {
      if (onFilterChange) {
        await onFilterChange(range.value)
      } else {
        // Simulate API call if no callback provided
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
    } catch (error) {
      console.error("Filter change failed:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-wrap gap-2 p-1 bg-muted/50 rounded-lg">
      {timeRanges.map((range) => (
        <Button
          key={range.label}
          variant={activeRange === range.label ? "default" : "ghost"}
          size="sm"
          disabled={loading}
          className={`
            relative transition-all duration-200 min-w-[80px]
            ${
              activeRange === range.label
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }
          `}
          onClick={() => handleFilterClick(range)}
        >
          {loading && activeRange === range.label ? <Loader2 className="h-4 w-4 animate-spin" /> : range.label}
        </Button>
      ))}
    </div>
  )
}
