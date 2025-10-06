import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
// import Languages from "@/components/languages"

export default function Home() {
	return (
		<div className="space-y-4">
			<About />
			<Experience />
			<Education />
			<Projects />
			<Skills />
			{/* <Languages /> */}
			<Footer />
		</div>
	)
}
