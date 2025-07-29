import { Github, Linkedin, Twitter, Youtube, Home } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Home, href: "#", label: "Home" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ]

  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm text-muted-foreground text-center">© 2025 Shahriar Sohan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
