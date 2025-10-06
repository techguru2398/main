import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import Link from "next/link"
import Image from "next/image"
import { CONTACT_INFO, PROFILE_DESCRIPTION } from "@/utils/constants"

export default function About() {
  return (
    <section id="about" className="pt-10">
      <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="flex w-full flex-col items-center gap-6 md:w-1/3">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-[#111421] shadow-[0_20px_50px_rgba(8,8,18,0.6)]">
            <Image src="/Djordje_.png" alt={CONTACT_INFO.name} fill className="object-cover" priority />
          </div>
          <div className="flex flex-col items-center gap-3 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <Link href={`mailto:${CONTACT_INFO.email}`} className="transition-colors hover:text-white">
                {CONTACT_INFO.email}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href={CONTACT_INFO.github} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:-translate-y-1 hover:text-white">
              <SiGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href={CONTACT_INFO.linkedin} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:-translate-y-1 hover:text-white">
              <SiLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="max-w-xl space-y-4 text-center md:text-left">
            <div className="text-xs font-semibold uppercase tracking-[0.5em] text-white/40">Profile</div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Head of Frontend Engineering · iGaming Platforms</h2>
            <p className="text-base leading-relaxed text-white/70">{PROFILE_DESCRIPTION}</p>
          </div>
          <Card className="mt-8 border-white/5 bg-[#0E111A]/80 shadow-[0_15px_50px_rgba(6,7,12,0.55)]">
            <CardContent className="grid gap-6 py-6 md:grid-cols-2">
              <div className="space-y-2 text-sm text-white/70">
                <p className="flex justify-between border-b border-white/5 pb-2 text-white/50"><span>Name</span><span className="font-medium text-white/80">{CONTACT_INFO.name}</span></p>
                <p className="flex justify-between border-b border-white/5 pb-2 text-white/50"><span>Role</span><span className="font-medium text-white/80">Head of Frontend Engineering</span></p><p className="flex justify-between border-b border-white/5 pb-2 text-white/50"><span>Experience</span><span className="font-medium text-white/80">8+ years</span></p>
                <p className="flex justify-between text-white/50"><span>Location</span><span className="font-medium text-white/80">{CONTACT_INFO.location}</span></p>
              </div>
              <div className="space-y-3 text-sm text-white/70">
                <p className="text-white/50">Specialties</p>
                <ul className="space-y-2">
                  <li className="rounded-lg border border-white/5 bg-white/5 p-3 text-white/80">iGaming product strategy &amp; UX leadership</li>
                  <li className="rounded-lg border border-white/5 bg-white/5 p-3 text-white/80">Motion-driven React/Next.js systems</li>
                  <li className="rounded-lg border border-white/5 bg-white/5 p-3 text-white/80">Growth experiments and A/B testing frameworks</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
