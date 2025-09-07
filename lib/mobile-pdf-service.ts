import { Capacitor } from "@capacitor/core"
import { Filesystem, Directory } from "@capacitor/filesystem"
import { Share } from "@capacitor/share"
import jsPDF from "jspdf"
import { getDashboardData, PDFGenerator } from "./pdf-generator"

export class MobilePDFService {
  private static instance: MobilePDFService

  public static getInstance(): MobilePDFService {
    if (!MobilePDFService.instance) {
      MobilePDFService.instance = new MobilePDFService()
    }
    return MobilePDFService.instance
  }

  public async generateAndSavePDF(): Promise<void> {
    try {
      // Generate PDF using existing generator
      const dashboardData = getDashboardData()
      const pdfGenerator = new PDFGenerator()

      // Get PDF as base64 string instead of downloading
      const doc = this.createPDFDocument(dashboardData)
      const pdfBase64 = doc.output("datauristring").split(",")[1]

      if (Capacitor.isNativePlatform()) {
        // Save to device filesystem on mobile
        await this.savePDFToDevice(pdfBase64)
      } else {
        // Fallback to browser download on web
        doc.save(`WealthElite-Dashboard-${new Date().toISOString().split("T")[0]}.pdf`)
      }
    } catch (error) {
      console.error("Error generating mobile PDF:", error)
      throw error
    }
  }

  private createPDFDocument(dashboardData: any): jsPDF {
    const doc = new jsPDF("p", "mm", "a4")
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20

    // Add header
    doc.setFontSize(24)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(33, 37, 41)
    doc.text("WealthElite Dashboard", margin, 30)

    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(108, 117, 125)
    doc.text("Mobile Financial Report", margin, 40)

    const now = new Date()
    const dateStr = now.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    doc.text(`Generated on: ${dateStr}`, margin, 50)

    // Add separator line
    doc.setDrawColor(222, 226, 230)
    doc.line(margin, 55, pageWidth - margin, 55)

    // Add main metrics
    let yPos = 70
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(33, 37, 41)
    doc.text("Key Metrics", margin, yPos)

    yPos += 15
    dashboardData.mainCards.forEach((card: any, index: number) => {
      doc.setDrawColor(222, 226, 230)
      doc.rect(margin + index * 85, yPos, 80, 35)

      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(108, 117, 125)
      doc.text("Current", margin + 5 + index * 85, yPos + 8)

      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(33, 37, 41)
      doc.text(`${card.title} ${card.value} ${card.unit}`, margin + 5 + index * 85, yPos + 20)

      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(
        card.changeType === "positive" ? 34 : 239,
        card.changeType === "positive" ? 197 : 68,
        card.changeType === "positive" ? 94 : 68,
      )
      doc.text(card.change, margin + 5 + index * 85, yPos + 28)
    })

    // Add transaction statistics
    yPos = 130
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(33, 37, 41)
    doc.text("Transaction Statistics", margin, yPos)

    yPos += 15
    const colWidths = [60, 30, 60]
    const headers = ["Transaction Type", "Count", "Amount (INR)"]

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    let xPos = margin
    headers.forEach((header, index) => {
      doc.text(header, xPos, yPos)
      xPos += colWidths[index]
    })

    doc.setDrawColor(222, 226, 230)
    doc.line(margin, yPos + 2, margin + 150, yPos + 2)

    yPos += 10
    doc.setFont("helvetica", "normal")
    doc.setTextColor(73, 80, 87)

    dashboardData.statsCards.forEach((card: any) => {
      xPos = margin
      const row = [card.title, card.value, card.amount]
      row.forEach((cell, cellIndex) => {
        doc.text(cell, xPos, yPos)
        xPos += colWidths[cellIndex]
      })
      yPos += 8
    })

    // Add footer
    doc.setFontSize(8)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(108, 117, 125)
    doc.text("WealthElite Dashboard - Mobile Report", margin, doc.internal.pageSize.getHeight() - 10)

    return doc
  }

  private async savePDFToDevice(pdfBase64: string): Promise<void> {
    try {
      const fileName = `WealthElite-Dashboard-${new Date().toISOString().split("T")[0]}.pdf`

      // Write file to device
      const result = await Filesystem.writeFile({
        path: fileName,
        data: pdfBase64,
        directory: Directory.Documents,
      })

      console.log("PDF saved to:", result.uri)

      // Share the PDF
      await Share.share({
        title: "WealthElite Dashboard Report",
        text: "Your financial dashboard report is ready",
        url: result.uri,
        dialogTitle: "Share Dashboard Report",
      })
    } catch (error) {
      console.error("Error saving PDF to device:", error)
      throw error
    }
  }
}
