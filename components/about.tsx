"use client";
import { useState, useEffect, useRef } from "react"
import GitHubCalendar, { Activity } from "react-github-calendar"

export function About() {
  const [loading, setLoading] = useState(true)
  const calendarRef = useRef<HTMLDivElement>(null)

  const currentYear = new Date().getFullYear()

  const filterThisYear = (contributions: Activity[]): Activity[] => {
    return contributions.filter((day) => {
      const date = new Date(day.date)
      return date.getFullYear() === currentYear
    })
  }

  useEffect(() => {
    if (!calendarRef.current) return

    const observer = new MutationObserver(() => {
      if (calendarRef.current?.querySelector("svg")) {
        setLoading(false)
        observer.disconnect()
      }
    })

    observer.observe(calendarRef.current, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden max-w-full mx-auto"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      )}
      <div
        ref={calendarRef}
        className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"} max-w-full overflow-x-auto`}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white max-w-full">
          My GitHub Contributions ({currentYear})
        </h2>
        <div className="max-w-full overflow-x-auto">
          <GitHubCalendar
            username="shahriar-sohan"
            transformData={filterThisYear}
          />
        </div>
      </div>
    </section>
  )
}
