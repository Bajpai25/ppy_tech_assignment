"use client"

import { Button } from "@/components/ui/button"
import { Download, Share } from "lucide-react"
import { MobilePDFService } from "@/lib/mobile-pdf-service"
import { useState } from "react"
import { Capacitor } from "@capacitor/core"

export function MobilePDFButton() {
  const [isGenerating, setIsGenerating] = useState(false)
  const isMobile = Capacitor.isNativePlatform()

  const handleGeneratePDF = async () => {
    try {
      setIsGenerating(true)
      const pdfService = MobilePDFService.getInstance()
      await pdfService.generateAndSavePDF()
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button
      onClick={handleGeneratePDF}
      disabled={isGenerating}
      className="bg-red-600 hover:bg-red-700 text-white"
      size="sm"
    >
      {isMobile ? <Share className="w-4 h-4 mr-2" /> : <Download className="w-4 h-4 mr-2" />}
      {isGenerating ? "Generating..." : isMobile ? "Share Report" : "Download PDF"}
    </Button>
  )
}
