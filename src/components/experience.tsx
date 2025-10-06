import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { companies } from "@/utils/resume-data"
import { Briefcase } from "lucide-react"
import Image from "next/image"

export default function Experience() {
	return (
		<section id="experience" className="pt-16">
			<div className="mb-10 flex items-center gap-3">
				<span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
					<Briefcase className="h-5 w-5" />
				</span>
				<div>
					<h2 className="text-3xl font-semibold text-white">Experience</h2>
					<p className="text-sm uppercase tracking-[0.4em] text-white/40">Leadership & Impact</p>
				</div>
			</div>
			<div className="space-y-8">
				{companies.map((company, index) => (
					<Card key={index} className="border-white/10 bg-[#0C1019]/70">
						<CardHeader className="pb-4">
							<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
								<div className="flex items-center gap-4">
									<div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#121623]">
										<Image src={company.logo} alt={company.name} width={64} height={64} className="object-contain" priority />
									</div>
									<div>
										<h3 className="text-2xl font-semibold text-white">{company.name}</h3>
										<p className="text-sm uppercase tracking-[0.3em] text-white/40">Featured role</p>
									</div>
								</div>
								<div className="flex flex-wrap gap-2">
									{company.technologies.slice(0, 4).map((tech, i) => (
										<span key={i} className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/50">
											{tech}
										</span>
									))}
								</div>
							</div>
						</CardHeader>
						<CardContent className="space-y-6">
							{company.positions.map((position, posIndex) => (
								<div key={posIndex} className="rounded-2xl border border-white/5 bg-white/5 p-6">
									<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
										<h4 className="text-xl font-medium text-white">{position.title}</h4>
										<p className="text-sm uppercase tracking-[0.3em] text-white/40">{position.duration}</p>
									</div>
									<ul className="mt-4 space-y-3 text-sm text-white/70">
										{position.description.map((item, i) => (
											<li key={i} className="leading-relaxed">{item}</li>
										))}
									</ul>
								</div>
							))}
							<div className="flex flex-wrap gap-2">
								{company.technologies.map((tech, i) => (
									<Badge key={i} variant="secondary" className="rounded-full border border-white/10 bg-transparent text-white/60">
										{tech}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}
