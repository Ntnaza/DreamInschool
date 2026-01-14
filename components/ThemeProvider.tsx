"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Ini komponen pembungkus aja, biar rapi
export function ThemeProvider({ children, ...props }: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}