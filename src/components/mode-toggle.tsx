"use client"

import { Moon, Sun, Check, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { setThemeCookie } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { Theme } from "@/types"

export function ModeToggle() {
	const { setTheme, theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleThemeChange = async (newTheme: Theme) => {
		setTheme(newTheme)
		await setThemeCookie(newTheme)
	}

	if (!mounted) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="cursor-pointer">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => handleThemeChange(Theme.Light)} className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Sun className="h-4 w-4" />
						<span>Light</span>
					</div>
					{theme === "light" && <Check className="h-4 w-4" />}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleThemeChange(Theme.Dark)} className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Moon className="h-4 w-4" />
						<span>Dark</span>
					</div>
					{theme === "dark" && <Check className="h-4 w-4" />}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleThemeChange(Theme.System)} className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Laptop className="h-4 w-4" />
						<span>System</span>
					</div>
					{theme === "system" && <Check className="h-4 w-4" />}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
