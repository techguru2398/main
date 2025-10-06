import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { education } from "@/utils/resume-data"
import { GraduationCap } from "lucide-react"
import Image from "next/image"

export default function Education() {
	return (
		<section id="education" className="pt-10">
			<div className="flex items-center gap-2 mb-6">
				<GraduationCap className="h-5 w-5" />
				<h2 className="text-2xl font-bold">Education</h2>
			</div>
			<div className="space-y-6">
				{education.map((edu, index) => (
					<Card key={index}>
						<CardHeader className="pb-2">
							<div className="flex items-start gap-4">
								<div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border relative">
									<Image src={edu.logo || "/edu-placeholder.svg"} alt={edu.institution} fill className="object-cover" />
								</div>
								<div className="flex flex-col md:flex-row md:justify-between w-full gap-2">
									<div>
										<h3 className="text-xl font-semibold">{edu.degree}</h3>
										<p className="text-muted-foreground">{edu.institution}</p>
										<p className="text-sm text-muted-foreground">{edu.location}</p>
									</div>
									<p className="text-sm text-muted-foreground md:text-right">{edu.duration}</p>
								</div>
							</div>
						</CardHeader>
						{edu.description && (
							<CardContent>
								<p className="text-muted-foreground">{edu.description}</p>
							</CardContent>
						)}
					</Card>
				))}
			</div>
		</section>
	)
}
