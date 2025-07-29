import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { PinContainer } from "./ui/3d-pin"

interface projects {
  title: string,
  description: string,
  image: string,
  technologies: string[],
  liveUrl: string,
  githubUrl: string,
}

export function Projects() {
  const projects = [
    {
      title: "Greek Restaurant Platform",
      description: "An enterprise-grade food ordering and reservation platform .",
      image: "/projects/greek.png",
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Nginx", "Kubernetes", "AWS"],
      liveUrl: "http://ec2-34-194-92-168.compute-1.amazonaws.com/",
      githubUrl: "https://github.com/Shahriar-Sohan/restaurant_web",
    },
    {
      title: "Rivalray E-Commerce Store",
      description: "A full-stack e-commerce site .",
      image: "/projects/rivalray.png",
      technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "Express", "Node.js", "MySQL", "REST API"],
      liveUrl: "https://rivalray.vercel.app",
      githubUrl: "https://github.com/Shahriar-Sohan/Rivalray_Ecommerce",
    },
    {
      title: "PiNAS - Personal Cloud Storage (Work in progress)",
      description: "A self-hosted NAS system built in C++ with multithreading, REST API using drogon c++, and Docker deployment on Raspberry Pi 5, supporting file syncing and streaming.",
      image: "/placeholder.svg?height=200&width=400&text=NAS+Solution",
      technologies: ["Drogon C++", "C", "Multithreading", "Docker", "REST API", "Raspberry Pi", "Linux", "CMake"],
      liveUrl: "#",
      githubUrl: "https://github.com/Shahriar-Sohan/NAS_by_rivalray",
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-24">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project, index) => (
              <PinContainer
                key={index}
                title={project.title}
                href={project.liveUrl}
                containerClassName=""
                className=""
              >
                <div className="bg-black rounded-xl border border-gray-800 shadow-sm flex flex-col h-[420px] overflow-hidden">
                  {project.image && (
                    <div className="relative h-40">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-4 justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      {project.title.includes("PiNAS") && (
                        <Badge variant="destructive" className="ml-2 text-xs">
                          Incomplete
                        </Badge>
                      )}
                      <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-700 border-gray-600 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </PinContainer>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
