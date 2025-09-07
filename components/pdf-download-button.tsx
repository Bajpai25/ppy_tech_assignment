"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { PDFGenerator, getDashboardData } from "@/lib/pdf-generator"
import { useState } from "react"

export function PDFDownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true)

      // Get dashboard data
      const dashboardData = getDashboardData()

      // Generate PDF
      const pdfGenerator = new PDFGenerator()
      pdfGenerator.generateDashboardPDF(dashboardData)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button onClick={handleDownloadPDF} disabled={isGenerating} className="bg-red-600 hover:bg-red-700 text-white">
      <Download className="w-4 h-4 mr-2" />
      {isGenerating ? "Generating PDF..." : "Download PDF Report"}
    </Button>
  )
}
