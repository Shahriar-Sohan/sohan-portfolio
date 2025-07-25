import { Github, Linkedin, Twitter, Youtube, Home } from "lucide-react"
import Link from "next/link"

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
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
          <p className="text-sm text-muted-foreground text-center">© 2024 John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
