"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CONTACT_INFO } from "@/utils/constants"
import { SiGithub, SiLinkedin } from "react-icons/si"

const testimonialAvatars = Array.from({ length: 7 }, (_, index) => index)

const socials = [
  {
    name: "GitHub",
    href: CONTACT_INFO.github,
    icon: <SiGithub className="h-5 w-5" />
  },
  {
    name: "LinkedIn",
    href: CONTACT_INFO.linkedin,
    icon: <SiLinkedin className="h-5 w-5" />
  }
]

export default function Hero() {
  return (
    <section className="relative isolate rounded-[2.5rem] border border-white/10 bg-[#0B0D12] p-8 shadow-[0_25px_80px_rgba(9,9,16,0.65)] md:p-10">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(62,122,255,0.6),_transparent_70%)] blur-3xl" />
        <div className="absolute -right-12 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,84,146,0.55),_transparent_65%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle_at_center,_rgba(41,232,128,0.4),_transparent_70%)] blur-3xl" />
      </div>
      <div className="grid items-center gap-10 md:grid-cols-[auto_minmax(0,1fr)_auto]">
        <div className="hidden md:flex h-full flex-col items-center justify-center text-xs font-semibold uppercase tracking-[0.4em] text-white/40">
          <span className="[writing-mode:vertical-rl]">Developer</span>
          <span className="mt-4 h-16 w-px bg-white/10" aria-hidden />
          <span className="mt-4 [writing-mode:vertical-rl]">Full Stack</span>
        </div>
        <div className="relative mx-auto flex w-full max-w-sm flex-col items-center">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_70px_rgba(5,5,12,0.55)]">
            <Image src="/Djordje_.png" alt={CONTACT_INFO.name} fill className="object-cover" priority />
          </div>
          <div className="-mt-6 w-full rounded-2xl border border-white/10 bg-[#0E121B]/80 p-4 text-center text-sm text-white/70 shadow-lg backdrop-blur">
            <p className="font-medium text-white">“I ship cinematic casino experiences at scale.”</p>
            <div className="mt-3 flex items-center justify-center gap-1">
              {testimonialAvatars.map((avatarIndex) => (
                <div
                  key={avatarIndex}
                  className="h-8 w-8 overflow-hidden rounded-full border border-white/10 bg-[#121623] shadow-inner"
                >
                  <Image src="/person.svg" alt="Client avatar" width={32} height={32} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/50">Djordje Djuricic</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Djordje <span className="text-white/60">Djuricic</span>
            </h1>
            <p className="max-w-md text-base text-white/70 md:text-lg">
              I design, animate, and launch premium casino platforms. From real-time loyalty engines to cinematic marketing hubs, I lead teams that make gameplay feel unforgettable.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <Button asChild size="lg" className="w-full max-w-[200px] rounded-full bg-white text-black transition hover:-translate-y-0.5 hover:bg-white/90">
              <Link href="#projects">View Portfolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full max-w-[200px] rounded-full border-white/20 bg-transparent text-white hover:border-white/40">
              <Link href="#contact">Light up the talk</Link>
            </Button>
          </div>
        </div>
        <div className="hidden flex-col items-center gap-4 md:flex">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:-translate-y-1 hover:text-white"
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

