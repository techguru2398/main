import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { skillCategories } from "@/utils/resume-data"
import { Code2 } from "lucide-react"

export default function Skills() {
	return (
		<section id="skills" className="pt-10">
			<div className="flex items-center gap-2 mb-6">
				<Code2 className="h-5 w-5" />
				<h2 className="text-2xl font-bold">Skills</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{skillCategories.map((category, index) => (
					<Card key={index}>
						<CardHeader className="pb-2">
							<h3 className="text-lg font-semibold">{category.name}</h3>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<div key={skillIndex}>
										<div className="flex justify-between mb-1">
											<span className="text-sm font-medium">{skill.name}</span>
											<div className="flex space-x-1">
												{[...Array(5)].map((_, i) => (
													<div key={i} className={`w-2 h-2 rounded-full ${i < skill.level ? "bg-primary" : "bg-muted"}`} />
												))}
											</div>
										</div>
										<div className="w-full bg-muted rounded-full h-1.5">
											<div className="bg-primary h-1.5 rounded-full" style={{ width: `${(skill.level / 5) * 100}%` }} />
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}
