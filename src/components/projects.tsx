import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { projects } from "@/utils/resume-data"
import { ExternalLink, Layers } from "lucide-react"
import { SiGithub } from "react-icons/si"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
	return (
		<section id="projects" className="pt-10">
			<div className="flex items-center gap-2 mb-6">
				<Layers className="h-5 w-5" />
				<h2 className="text-2xl font-bold">Projects</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project, index) => (
					<Card key={index} className="flex flex-col h-full">
						<div className="aspect-video w-full overflow-hidden relative">
							{project.link ? (
								<Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
									<Image
										src={project.thumbnail || "/logo.svg"}
										alt={project.title}
										fill
										className="object-cover transition-transform hover:scale-105 duration-300"
									/>
								</Link>
							) : (
								<Image src={project.thumbnail || "/logo.svg"} alt={project.title} fill className="object-cover" />
							)}
						</div>
						<CardHeader className="pb-2">
							<div className="flex justify-between items-start">
								<h3 className="text-xl font-semibold">{project.title}</h3>
								<span className="text-xs text-muted-foreground">{project.duration}</span>
							</div>
						</CardHeader>
						<CardContent className="flex-grow">
							<p className="text-muted-foreground mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2">
								{project.skills.map((skill, i) => (
									<Badge key={i} variant="outline">
										{skill}
									</Badge>
								))}
							</div>
						</CardContent>
						<CardFooter className="flex gap-2 pt-2">
							{project.link && (
								<Button variant="outline" size="sm" asChild className="gap-2">
									<Link href={project.link} target="_blank" rel="noopener noreferrer">
										<ExternalLink className="h-4 w-4" />
										<span>Demo</span>
									</Link>
								</Button>
							)}
							{project.github && (
								<Button variant="outline" size="sm" asChild className="gap-2">
									<Link href={project.github} target="_blank" rel="noopener noreferrer">
										<SiGithub className="h-4 w-4" />
										<span>Code</span>
									</Link>
								</Button>
							)}
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	)
}
