"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Link from "next/link"
import LightRays from '@/components/ui/LightRays';
import ProfileCard from "./ui/ProfileCard";
import './ui/waving-hand.css'
import WavingHand from '@/components/ui/WavingHand';
import { BoxReveal } from "./magicui/box-reveal";



export function Hero() {
  const [showHand, setShowHand] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHand(true);
    }, 800); // matches the fadeSlideInLeft duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen">
      <div className="min-h-screen flex items-center justify-around ">
        <div style={{ width: '100%', height: '800px', position: 'absolute', top: 0 }}>
          <LightRays
            raysOrigin="left"
            raysColor="#00ffff"
            raysSpeed={2}
            lightSpread={0.8}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.8}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <div className="container pl-6 flex justify-start">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 opacity-0 blur-md animate-[fadeSlideInLeft_0.8s_ease-out_forwards]">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sohan</span>
                {showHand && (
                  <div className="inline-block">
                    <WavingHand />
                  </div>
                )}
              </h1>
              <style jsx>{`
              @keyframes fadeSlideInLeft {
                0% {
                  opacity: 0;
                  filter: blur(20px);
                  transform: translateX(-50px);
                }
                100% {
                  opacity: 1;
                  filter: blur(0);
                  transform: translateX(0);
                }
              }
            `}</style>
            </div>
            <BoxReveal>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Self-taught Full-Stack Engineer specializing in scalable system design, clean architecture, and performant code. Deeply passionate about optimizing algorithms, mastering modern frameworks, and architecting maintainable, test-driven applications that solve real-world problems efficiently.”
              </p>
            </BoxReveal>



          </div>
        </div>
        <div className="mr-20">

          <ProfileCard
            name="Shahriar Sohan"
            title="Software Engineer"
            handle="_.r1v4l._"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/sohan-pfp.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>

      </div>
      <div className="animate-bounce pb-12">
        <ArrowDown className="h-12 w-12 mx-auto text-muted-foreground" />
      </div>


    </section>
  )
}
