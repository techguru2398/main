export interface Position {
  title: string
  duration: string
  description: string[]
}

export interface Company {
  name: string
  logo: string
  positions: Position[]
  technologies: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  duration: string
  description: string
  logo: string | null
}

export interface Project {
  title: string
  description: string
  thumbnail: string | null
  skills: string[]
  link: string | null
  github: string | null
  duration: string
}

export interface Skill {
  name: string
  level: number // 1-5
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export enum LanguageProficiency {
  Native = "Native",
  Fluent = "Fluent",
  Professional = "Professional",
  Intermediate = "Intermediate",
  Basic = "Basic",
}

export interface Language {
  name: string
  proficiency: LanguageProficiency
  level: number // 1-5
}

export enum Theme {
  Light = "light",
  Dark = "dark",
  System = "system",
}
