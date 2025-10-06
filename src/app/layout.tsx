import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { cookies } from "next/headers"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import { Theme } from "@/types"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "Djordje Djuricic – Software Engineer",
	description: "Full-stack developer with expertise in modern web stacks and AI tools."
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const cookieStore = await cookies()
	const themeCookie = cookieStore.get("theme")
	const defaultTheme = themeCookie?.value || Theme.System

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem disableTransitionOnChange storageKey="portfolio-theme">
					<div>
						<Navbar />
						<main className="container mx-auto px-4 py-8 max-w-4xl">{children}</main>
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
