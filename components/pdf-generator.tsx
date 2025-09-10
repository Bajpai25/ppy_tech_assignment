"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function PDFGenerator() {
  const generatePDF = async () => {
    // This would integrate with a PDF generation library like jsPDF 
    const { jsPDF } = await import("jspdf")
    const doc = new jsPDF()

    // Add content to PDF
    doc.setFontSize(20)
    doc.text("WealthElite Dashboard Report", 20, 30)

    doc.setFontSize(14)
    doc.text("AUM: 12.19 Cr (+0.77% MoM)", 20, 50)
    doc.text("SIP: 1.39 Lakh (+0% MoM)", 20, 70)

    doc.text("Statistics:", 20, 100)
    doc.text("• Purchases: 0 (0.00 INR)", 30, 120)
    doc.text("• Redemptions: 0 (0.00 INR)", 30, 140)
    doc.text("• Rejected Transactions: 0 (0.00 INR)", 30, 160)
    doc.text("• SIP Rejections: 0 (0.00 INR)", 30, 180)
    doc.text("• New SIP: 0 (0.00 INR)", 30, 200)

    doc.save("wealth-elite-dashboard.pdf")
  }

  return (
    <Button onClick={generatePDF} className="bg-red-600 hover:bg-red-700">
      <Download className="w-4 h-4 mr-2" />
      Download PDF Report
    </Button>
  )
}
