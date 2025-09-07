import jsPDF from "jspdf"

interface MainCardData {
  title: string
  value: string
  unit: string
  change: string
  changeType: "positive" | "negative"
}

interface StatsCardData {
  title: string
  value: string
  amount: string
}

interface ChartData {
  title: string
  data: any[]
}

interface DashboardData {
  mainCards: MainCardData[]
  statsCards: StatsCardData[]
  charts: ChartData[]
  generatedAt: string
}

export class PDFGenerator {
  private doc: jsPDF
  private pageWidth: number
  private pageHeight: number
  private margin: number

  constructor() {
    this.doc = new jsPDF("p", "mm", "a4")
    this.pageWidth = this.doc.internal.pageSize.getWidth()
    this.pageHeight = this.doc.internal.pageSize.getHeight()
    this.margin = 20
  }

  private addHeader() {
    this.doc.setFontSize(24)
    this.doc.setFont("helvetica", "bold")
    this.doc.setTextColor(33, 37, 41)
    this.doc.text("WealthElite Dashboard", this.margin, 30)

    this.doc.setFontSize(12)
    this.doc.setFont("helvetica", "normal")
    this.doc.setTextColor(108, 117, 125)
    this.doc.text("Financial Performance Report", this.margin, 40)

    const now = new Date()
    const dateStr = now.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    this.doc.text(`Generated on: ${dateStr}`, this.margin, 50)

    this.doc.setDrawColor(222, 226, 230)
    this.doc.line(this.margin, 55, this.pageWidth - this.margin, 55)
  }

  private addMainCards(mainCards: MainCardData[]) {
    let yPos = 70

    this.doc.setFontSize(16)
    this.doc.setFont("helvetica", "bold")
    this.doc.setTextColor(33, 37, 41)
    this.doc.text("Key Metrics", this.margin, yPos)

    yPos += 15

    mainCards.forEach((card, index) => {
      this.doc.setDrawColor(222, 226, 230)
      this.doc.rect(this.margin + index * 85, yPos, 80, 35)

      this.doc.setFontSize(10)
      this.doc.setFont("helvetica", "normal")
      this.doc.setTextColor(108, 117, 125)
      this.doc.text("Current", this.margin + 5 + index * 85, yPos + 8)

      this.doc.setFontSize(18)
      this.doc.setFont("helvetica", "bold")
      this.doc.setTextColor(33, 37, 41)
      this.doc.text(`${card.title} ${card.value} ${card.unit}`, this.margin + 5 + index * 85, yPos + 20)

      this.doc.setFontSize(9)
      this.doc.setFont("helvetica", "normal")
      const isPositive = card.changeType === "positive"
      this.doc.setTextColor(isPositive ? 34 : 239, isPositive ? 197 : 68, isPositive ? 94 : 68)
      this.doc.text(card.change, this.margin + 5 + index * 85, yPos + 28)
    })
  }

  private addStatsCards(statsCards: StatsCardData[]) {
    let yPos = 130

    this.doc.setFontSize(16)
    this.doc.setFont("helvetica", "bold")
    this.doc.setTextColor(33, 37, 41)
    this.doc.text("Transaction Statistics", this.margin, yPos)

    yPos += 15

    const tableData = statsCards.map((card) => [card.title, card.value, card.amount])

    this.doc.setFontSize(10)
    this.doc.setFont("helvetica", "bold")
    this.doc.setTextColor(33, 37, 41)

    const colWidths = [60, 30, 60]
    const headers = ["Transaction Type", "Count", "Amount (INR)"]

    let xPos = this.margin
    headers.forEach((header, index) => {
      this.doc.text(header, xPos, yPos)
      xPos += colWidths[index]
    })

    this.doc.setDrawColor(222, 226, 230)
    this.doc.line(this.margin, yPos + 2, this.margin + 150, yPos + 2)

    yPos += 10

    this.doc.setFont("helvetica", "normal")
    this.doc.setTextColor(73, 80, 87)

    tableData.forEach((row) => {
      xPos = this.margin
      row.forEach((cell, cellIndex) => {
        this.doc.text(cell, xPos, yPos)
        xPos += colWidths[cellIndex]
      })
      yPos += 8
    })
  }

  private addChartsData(charts: ChartData[]) {
    let yPos = 220

    this.doc.setFontSize(16)
    this.doc.setFont("helvetica", "bold")
    this.doc.setTextColor(33, 37, 41)
    this.doc.text("Charts Data Summary", this.margin, yPos)

    yPos += 15

    charts.forEach((chart) => {
      this.doc.setFontSize(12)
      this.doc.setFont("helvetica", "bold")
      this.doc.setTextColor(33, 37, 41)
      this.doc.text(chart.title, this.margin, yPos)

      yPos += 10

      this.doc.setFontSize(9)
      this.doc.setFont("helvetica", "normal")
      this.doc.setTextColor(73, 80, 87)

      if (chart.title === "CLIENTS") {
        chart.data.forEach((item: any) => {
          this.doc.text(`${item.name}: ${item.value}`, this.margin + 5, yPos)
          yPos += 6
        })
      } else if (chart.title === "SIP BUSINESS CHART") {
        chart.data.forEach((item: any) => {
          this.doc.text(`${item.month}: Bar ${item.bar}, Line ${item.line}`, this.margin + 5, yPos)
          yPos += 6
        })
      } else if (chart.title === "MONTHLY MIS") {
        chart.data.forEach((item: any) => {
          this.doc.text(`${item.month}: ${item.value1}, ${item.value2}, ${item.value3}`, this.margin + 5, yPos)
          yPos += 6
        })
      }

      yPos += 10
    })
  }

  public generateDashboardPDF(data: DashboardData): void {
    this.addHeader()
    this.addMainCards(data.mainCards)
    this.addStatsCards(data.statsCards)
    this.addChartsData(data.charts)

    this.doc.setFontSize(8)
    this.doc.setFont("helvetica", "normal")
    this.doc.setTextColor(108, 117, 125)
    this.doc.text("WealthElite Dashboard - Confidential Report", this.margin, this.pageHeight - 10)

    this.doc.save(`WealthElite-Dashboard-${new Date().toISOString().split("T")[0]}.pdf`)
  }
}

export function getDashboardData(): DashboardData {
  return {
    mainCards: [
      {
        title: "AUM",
        value: "12.19",
        unit: "Cr",
        change: "+0.77% MoM",
        changeType: "positive",
      },
      {
        title: "SIP",
        value: "1.39",
        unit: "Lakh",
        change: "+0% MoM",
        changeType: "positive",
      },
    ],
    statsCards: [
      { title: "Purchases", value: "0", amount: "0.00 INR" },
      { title: "Redemptions", value: "0", amount: "0.00 INR" },
      { title: "Rejected Transactions", value: "0", amount: "0.00 INR" },
      { title: "SIP Rejections", value: "0", amount: "0.00 INR" },
      { title: "New SIP", value: "0", amount: "0.00 INR" },
    ],
    charts: [
      {
        title: "CLIENTS",
        data: [
          { name: "Active", value: 3824 },
          { name: "Inactive", value: 541 },
          { name: "Online", value: 60 },
          { name: "New", value: 2 },
        ],
      },
      {
        title: "SIP BUSINESS CHART",
        data: [
          { month: "Mar", bar: 1.6, line: 2.0 },
          { month: "Apr", bar: 1.4, line: 1.8 },
          { month: "May", bar: 1.6, line: 0.2 },
          { month: "Jun", bar: 1.5, line: 1.4 },
        ],
      },
      {
        title: "MONTHLY MIS",
        data: [
          { month: "Jan", value1: 0.2, value2: -0.1, value3: 0.3 },
          { month: "Feb", value1: 0.3, value2: 0.1, value3: 0.4 },
          { month: "Mar", value1: 0.25, value2: 0.05, value3: 0.35 },
          { month: "Apr", value1: 0.4, value2: 0.2, value3: 0.5 },
          { month: "May", value1: 0.35, value2: 0.15, value3: 0.45 },
          { month: "Jun", value1: 0.2, value2: -0.05, value3: 0.3 },
        ],
      },
    ],
    generatedAt: new Date().toISOString(),
  }
}
