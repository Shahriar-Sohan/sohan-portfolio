"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, Github, Linkedin, Twitter, ExternalLink, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = {
    email: "sohanineu@gmail.com",
    whatsapp: "+351920492501",
    whatsappLink: "https://wa.me/351920492501",
    social: {
      linkedin: "https://www.linkedin.com/in/shahriar-sohan-48887b279/",
      github: "https://github.com/Shahriar-Sohan",
      twitter: "https://twitter.com/yourusername",
    },
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`
  }

  const handleWhatsAppClick = () => {
    window.open(contactInfo.whatsappLink, "_blank")
  }

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto bg-black min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Get In Touch</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Ready to discuss opportunities? I&apos;d love to hear from you. Reach out through any of the channels below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Email Card */}
        <Card
          className="hover:shadow-lg transition-shadow bg-gray-900 border-gray-800"
        >
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl text-white">Email</CardTitle>
            <CardDescription className="text-gray-400">Send me a direct message</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="font-medium text-gray-200 mb-4">{contactInfo.email}</p>
            <Button onClick={handleEmailClick} className="w-full bg-white text-black hover:bg-gray-200 cursor-pointer">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
          </CardContent>
        </Card>

        {/* WhatsApp Card */}
        <Card
          className="hover:shadow-lg transition-shadow bg-gray-900 border-gray-800"
        >
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-green-400" />
            </div>
            <CardTitle className="text-xl text-white">WhatsApp</CardTitle>
            <CardDescription className="text-gray-400">Quick chat or call</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="font-medium text-gray-200 mb-4">{contactInfo.whatsapp}</p>
            <Button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message on WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Location Card */}
      <Card
        className="bg-gray-900 border-gray-800 hover:shadow-lg transition-shadow mb-8"
      >
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-blue-400" />
          </div>
          <CardTitle className="text-xl text-white">Location</CardTitle>
          <CardDescription className="text-gray-400">Based in Portugal, Lisbon</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {/* No button or click handlers needed */}
        </CardContent>
      </Card>

      {/* Social Media Links */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-white">Connect on Social Media</CardTitle>
          <CardDescription className="text-gray-400">Follow my work and professional updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="flex-1 max-w-[200px] bg-transparent border-gray-700 text-white hover:bg-gray-800 hover:text-white cursor-pointer"
              onClick={() => window.open(contactInfo.social.linkedin, "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="flex-1 max-w-[200px] bg-transparent border-gray-700 text-white hover:bg-gray-800 hover:text-white cursor-pointer"
              onClick={() => window.open(contactInfo.social.github, "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="flex-1 max-w-[200px] bg-transparent border-gray-700 text-white hover:bg-gray-800 hover:text-white cursor-pointer"
              onClick={() => window.open(contactInfo.social.twitter, "_blank")}
            >
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center mt-12 p-6 bg-gray-900 border border-gray-800 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-white">Looking for a Developer?</h3>
        <p className="text-gray-400 mb-4">
          I&apos;m currently open to new opportunities and would love to discuss how I can contribute to your team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" onClick={handleEmailClick} className="bg-white text-black hover:bg-gray-200 cursor-pointer">
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleWhatsAppClick}
            className="border-gray-700 text-white hover:bg-gray-800 hover:text-white bg-transparent cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
