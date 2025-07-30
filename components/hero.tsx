"use client";
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react"
import LightRays from '@/components/ui/LightRays';
import ProfileCard from "./ui/ProfileCard";
import './ui/waving-hand.css'
import WavingHand from '@/components/ui/WavingHand';
import { BoxReveal } from "./magicui/box-reveal";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export function Hero() {
  const [showHand, setShowHand] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHand(true);
    }, 800); // matches the fadeSlideInLeft duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen">
      <div className="min-h-screen flex items-center justify-around ">
        {!isMobile && (
          <div style={{ width: '100%', height: '110vh', position: 'absolute', top: 0 }}>
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
        )}
        <div className="container pl-6 flex justify-start">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 opacity-0 blur-md animate-[fadeSlideInLeft_0.8s_ease-out_forwards]">
                Hi, I&apos;m{" "}
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
                Self-taught Full-Stack Developer passionate about building scalable, efficient, and clean systems. Currently looking for an internship or junior role in frontend or backend development. I don’t code for the money — I code because it’s what I genuinely love doing.              </p>
            </BoxReveal>



          </div>
        </div>
        {!isMobile && (
          <div className="mr-20 animate-slideInRight">
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
              onContactClick={() => {
                window.open("https://wa.me/351920492501", "_blank");
              }}
            />
            <style jsx>{`
              @keyframes slideInRight {
                0% {
                  opacity: 0;
                  transform: translateX(500px);
                }
                100% {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              .animate-slideInRight {
                animation: slideInRight 0.8s ease-out forwards;
              }
            `}</style>
          </div>
        )}

      </div>
      <div className="animate-bounce pb-12">
        <ArrowDown className="h-12 w-12 mx-auto text-muted-foreground" />
      </div>


    </section>
  )
}
