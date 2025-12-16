import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function ExperienceTimeline() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="container max-w-screen-2xl py-8">
            <div className="mx-auto flex max-w-[980px] flex-col gap-4">
                <h2 className="text-2xl font-semibold tracking-tight">Contribution Activity</h2>

                <div className="relative border-l border-[var(--gh-border)] ml-3 md:ml-6 space-y-8 pl-8 md:pl-12 py-4">

                    {experience.map((job, index) => (
                        <div key={index} className="relative">
                            <span className="absolute -left-[41px] md:-left-[57px] top-1 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border border-[var(--gh-border)] bg-[var(--gh-bg)] ring-4 ring-[var(--gh-bg)]">
                                {job.type === "Research" ? (
                                    <Calendar className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                                ) : (
                                    <Briefcase className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                                )}
                            </span>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-semibold">{job.role}</h3>
                                    <Badge variant="outline" className="text-xs font-normal">{job.company}</Badge>
                                    <span className="text-xs text-muted-foreground ml-auto">{job.year}</span>
                                </div>
                                <Card className="mt-2">
                                    <CardContent className="p-4 text-sm leading-relaxed">
                                        <ul className="list-disc ml-4 space-y-1 text-muted-foreground">
                                            {job.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
