import { AboutReadme } from "@/components/sections/AboutReadme";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AboutReadme />
      <div className="w-full border-t border-[var(--gh-border)]" />
      <ProjectShowcase />
      <div className="w-full border-t border-[var(--gh-border)]" />
      <SkillsGrid />
      <div className="w-full border-t border-[var(--gh-border)]" />
      <ExperienceTimeline />
    </main>
  );
}
