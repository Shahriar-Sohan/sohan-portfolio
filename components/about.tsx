import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-64 h-64 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                JD
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                make a difference. I specialize in modern web technologies and love turning complex problems into
                simple, beautiful designs.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community talks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
