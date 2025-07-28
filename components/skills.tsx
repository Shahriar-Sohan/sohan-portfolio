import LightRays from "./ui/LightRays"
import { HoverEffect } from "./ui/card-hover-effect"


export function Skills() {
  const skills = [
    {
      title: "Languages",
      technologies: [
        { name: "JavaScript", img: "javaScript.svg", height: 50, width: 50 },
        { name: "TypeScript", img: "typeScript.svg", height: 50, width: 50 },
        { name: "C", img: "c.svg", height: 50, width: 50 },
        { name: "C++", img: "c++.svg", height: 50, width: 50 },
        { name: "Python", img: "python.svg", height: 50, width: 50 },
      ],
    },
    {
      title: "Frontend",
      technologies: [
        { name: "HTML", img: "html.svg", height: 50, width: 50 },
        { name: "CSS", img: "css.svg", height: 50, width: 50 },
        { name: "React", img: "react.svg", height: 50, width: 50 },
        { name: "Vite", img: "vite.svg", height: 50, width: 50 },
        { name: "Next.js", img: "nextjs.svg", height: 50, width: 50 },
        { name: "Tailwind CSS", img: "tailwindCss.svg", height: 50, width: 50 },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "Next.js", img: "nextjs.svg", height: 50, width: 50 },
        { name: "Node.js", img: "nodejs.svg", height: 50, width: 50 },
        { name: "Express.js", img: "express.svg", height: 50, width: 50 },
        { name: "Drogon C++", img: "drogon.png", height: 50, width: 50 },
      ],
    },
    {
      title: "Databases",
      technologies: [
        { name: "PostgreSQL", img: "postgresql.svg", height: 50, width: 50 },
        { name: "MySQL", img: "mysql.svg", height: 50, width: 50 },
        { name: "MongoDB", img: "mongodb.svg", height: 50, width: 50 },
        { name: "Redis", img: "redis.svg", height: 50, width: 50 },
      ],
    },
    {
      title: "DevOps",
      technologies: [
        { name: "Docker", img: "docker.svg", height: 50, width: 50 },
        { name: "Nginx", img: "nginx.svg", style: {filter: "grayscale(100%) brightness(1) invert(1)"}, height: 50, width: 50 },
        { name: "AWS EC2", img: "ec2.svg",  height: 50, width: 50 },
        { name: "AWS ECR", img: "ecr.svg", height: 50, width: 50 },
        { name: "Github Action CI/CD Pipeline", img: "devops.svg", style: { overflow: "hidden", transform: "scale(1.9)", paddingTop: "9px", filter: "grayscale(100%) brightness(2) invert(0)" }, height: 50, width: 144 },
        { name: "Kubernetes", img: "kubernetes.svg", height: 50, width: 50 },
      ],
    },
    {
      title: "Tools",
      technologies: [
        { name: "Git", img: "git.svg", height: 50, width: 50 },
        { name: "Linux", img: "linux.svg", height: 50, width: 50 },
        { name: "Bash", img: "bash.svg", height: 50, width: 50 },
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen relative">
      <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={2}
          lightSpread={0.8}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.8}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-bold text-center py-12">Skills & Technologies</h2>
          <HoverEffect skills={skills}/>
      </div >
    </section >
  )
}
