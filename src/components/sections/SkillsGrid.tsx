import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { portfolioData } from "@/data/portfolio"

export function SkillsGrid() {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="container max-w-screen-2xl py-8">
            <div className="mx-auto flex max-w-[980px] flex-col gap-4">
                <h2 className="text-2xl font-semibold tracking-tight">Technical Skills</h2>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
                        <CardTitle className="text-base font-normal">Skill Proficiency (Contribution Style)</CardTitle>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Less</span>
                            <div className="flex gap-1">
                                <div className="h-4 w-4 rounded-[2px] bg-[var(--gh-btn-bg)] border border-[var(--gh-border)]" />
                                <div className="h-4 w-4 rounded-[2px] bg-[#9be9a8]" />
                                <div className="h-4 w-4 rounded-[2px] bg-[#40c463]" />
                                <div className="h-4 w-4 rounded-[2px] bg-[#30a14e]" />
                                <div className="h-4 w-4 rounded-[2px] bg-[#216e39]" />
                            </div>
                            <span>More</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">


                                {skills.map((category) => (
                                    <div key={category.category} className="space-y-2">
                                        <h3 className="text-sm font-medium text-muted-foreground">{category.category}</h3>
                                        <div className="flex flex-wrap gap-1">
                                            {category.items.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    className={cn(
                                                        "h-4 w-4 rounded-[2px] transition-all hover:scale-125 cursor-help",
                                                        skill.level === 1 && "bg-[#9be9a8]",
                                                        skill.level === 2 && "bg-[#40c463]",
                                                        skill.level === 3 && "bg-[#30a14e]",
                                                        skill.level >= 4 && "bg-[#216e39]",
                                                    )}
                                                    title={`${skill.name}: Level ${skill.level}/4`}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {category.items.map(s => (
                                                <span key={s.name} className="text-[10px] text-muted-foreground mr-1">{s.name}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
