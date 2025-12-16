import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[var(--gh-border)] bg-[var(--gh-bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--gh-bg)]/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Github className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">Edwin Kim</span>
                    </Link>
                    <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
                        <Link href="#about" className="transition-colors hover:text-foreground/80">
                            Overview
                        </Link>
                        <Link href="#projects" className="transition-colors hover:text-foreground/80">
                            Repositories
                        </Link>
                        <Link href="#experience" className="transition-colors hover:text-foreground/80">
                            Contributions
                        </Link>
                    </nav>
                </div>

                {/* Mobile Menu Placeholder - Can be expanded later */}
                <div className="flex flex-1 items-center justify-between md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search Placeholder if needed */}
                    </div>
                    <nav className="flex items-center gap-2">
                        <Link
                            href="https://github.com/ekimcodes" // Update with real link
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link
                            href="https://linkedin.com/in/kedwin"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </div>
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1RxIM2O-Axhs0FGN37lmH_kOJiSO5CVo5/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                Resume
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </nav>
    )
}
