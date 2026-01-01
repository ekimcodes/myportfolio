import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookMarked, Star, GitFork } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function ProjectShowcase() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="container max-w-screen-2xl py-8">
            <div className="mx-auto flex max-w-[980px] flex-col gap-4">
                <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

                <div className="grid gap-4 md:grid-cols-2">

                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transition-transform hover:-translate-y-1"
                        >
                            <Card className="flex h-full flex-col justify-between hover:border-[var(--gh-text)]/50 transition-colors">
                                <CardHeader>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                        <BookMarked className="h-4 w-4" />
                                        <span>Public</span>
                                    </div>
                                    <CardTitle className="text-lg text-[var(--gh-link)] group-hover:underline">{project.name}</CardTitle>
                                    <CardDescription className="mt-2 line-clamp-3 whitespace-pre-line">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="text-xs text-muted-foreground gap-4">
                                    <div className="flex items-center gap-1">
                                        <div
                                            className="h-3 w-3 rounded-full"
                                            style={{ backgroundColor: project.languageColor }}
                                        />
                                        <span>{project.language}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3" />
                                        <span>{project.stars}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <GitFork className="h-3 w-3" />
                                        <span>{project.forks}</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </a>
                    ))}

                </div>
            </div>
        </section>
    )
}
