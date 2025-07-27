import LightRays from "./ui/LightRays"
import { HoverEffect } from "./ui/card-hover-effect"


export function Skills() {
  const skills = [
    {
      title: "Languages",
      technologies: [
        { img: "javaScript.svg", height: 50, width: 50 },
        { img: "typeScript.svg", height: 50, width: 50 },
        { img: "c.svg", height: 50, width: 50 },
        { img: "c++.svg", height: 50, width: 50 },
        { img: "python.svg", height: 50, width: 50 },
      ],
    },
    {
      title: "Frontend",
      technologies: [
        { img: "html.svg", height: 50, width: 50 },
        { img: "css.svg", height: 50, width: 50 },
        { img: "react.svg", height: 50, width: 50 },
        { img: "vite.svg", height: 50, width: 50 },
        { img: "nextjs.svg", height: 50, width: 50 },
        { img: "tailwindCss.svg", height: 50, width: 50 },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { img: "nextjs.svg", height: 50, width: 50 },
        { img: "nodejs.svg", height: 50, width: 50 },
        { img: "express.svg", height: 50, width: 50 },
        { img: "drogon.png", height: 50, width: 50 },
      ],
    },
    {
      title: "Databases",
      technologies: [
        { img: "postgresql.svg", height: 50, width: 50 },
        { img: "mysql.svg", height: 50, width: 50 },
        { img: "mongodb.svg", height: 50, width: 50 },
        { img: "redis.svg", height: 50, width: 50 },
      ],
    },
    {
      title: "DevOps",
      technologies: [
        { img: "docker.svg", height: 50, width: 50 },
        { img: "nginx.svg", style: {filter: "grayscale(100%) brightness(1) invert(1)"}, height: 50, width: 50 },
        { img: "ec2.svg",  height: 50, width: 50 },
        { img: "ecr.svg", height: 50, width: 50 },
        { img: "devops.svg", style: { overflow: "hidden", transform: "scale(1.9)", paddingTop: "9px", filter: "grayscale(100%) brightness(2) invert(0)" }, height: 50, width: 144 },
        { img: "kubernetes.svg", height: 50, width: 50 },
      ],
    },
    {
      title: "Tools",
      technologies: [
        { img: "git.svg", height: 50, width: 50 },
        { img: "linux.svg", height: 50, width: 50 },
        { img: "bash.svg", height: 50, width: 50 },
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
