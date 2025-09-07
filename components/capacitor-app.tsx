"use client"

import type React from "react"

import { useEffect } from "react"
import { Capacitor } from "@capacitor/core"
import { SplashScreen } from "@capacitor/splash-screen"
import { StatusBar, Style } from "@capacitor/status-bar"

export function CapacitorApp({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initializeApp = async () => {
      if (Capacitor.isNativePlatform()) {
        // Hide splash screen
        await SplashScreen.hide()

        // Set status bar style
        await StatusBar.setStyle({ style: Style.Light })
        await StatusBar.setBackgroundColor({ color: "#ffffff" })
      }
    }

    initializeApp()
  }, [])

  return <>{children}</>
}
