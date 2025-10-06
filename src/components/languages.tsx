import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { languages } from "@/utils/resume-data"
import { Globe } from "lucide-react"

export default function Languages() {
	return (
		<section id="languages" className="pt-10">
			<div className="flex items-center gap-2 mb-6">
				<Globe className="h-5 w-5" />
				<h2 className="text-2xl font-bold">Languages</h2>
			</div>
			<Card>
				<CardHeader className="pb-2">
					<h3 className="text-lg font-semibold">Language Proficiency</h3>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{languages.map((language, index) => (
							<div key={index} className="space-y-2">
								<div className="flex justify-between items-center">
									<span className="font-medium">{language.name}</span>
									<span className="text-sm text-muted-foreground">{language.proficiency}</span>
								</div>
								<div className="flex space-x-1">
									{[...Array(5)].map((_, i) => (
										<div key={i} className={`flex-1 h-1.5 rounded-full ${i < language.level ? "bg-primary" : "bg-muted"}`} />
									))}
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</section>
	)
}
