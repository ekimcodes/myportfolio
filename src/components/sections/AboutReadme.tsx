import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function AboutReadme() {
    const { about } = portfolioData;

    // Dynamically generate the python class string based on data
    const pythonCode = `class ContactInfo:
    email = "${about.contact.email}"
    phone = "${about.contact.phone}"
    linkedin = "${about.contact.linkedin}"
    location = "${about.contact.location}"
    education = "${about.contact.education}"`;

    // Function to process bold text in description (e.g., **Text**)
    const renderDescription = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    const renderFocusItem = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    }

    return (
        <section id="about" className="container max-w-screen-2xl py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex max-w-[980px] flex-col items-start gap-2">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{about.firstName.toLowerCase()}{about.lastName.toLowerCase()} / README.md</span>
                </div>

                <Card className="w-full mt-2 overflow-hidden">
                    <div className="border-b border-[var(--gh-border)] bg-[var(--gh-bg)] px-4 py-2 text-sm font-medium flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                        <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                        <span className="ml-2 text-muted-foreground">Preview</span>
                    </div>
                    <CardContent className="p-6 md:p-8 space-y-6">
                        <div className="space-y-4">
                            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
                                Hi there, I'm {about.firstName} <span className="animate-wave inline-block">👋</span>
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:mt-6">
                                {renderDescription(about.description)}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                                Contact Info
                            </h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="relative rounded-md bg-muted/50 p-4 font-mono text-sm">
                                    <pre className="overflow-x-auto">
                                        <code className="language-python">
                                            {pythonCode}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
                                Current Focus
                            </h2>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                {about.currentFocus.map((item, index) => (
                                    <li key={index}>{renderFocusItem(item)}</li>
                                ))}
                            </ul>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
