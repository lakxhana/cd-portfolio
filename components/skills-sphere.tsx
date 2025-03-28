"use client"

import { useEffect, useRef } from "react"
import TagCloud from "TagCloud"

export default function SkillsSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInitializedRef = useRef(false)

  useEffect(() => {
    if (containerRef.current && !isInitializedRef.current) {
      try {
        const texts = [
          "HTML",
          "CSS",
          "React Native",
          "JavaScript",
          "React.js",
          "Cucumber",
          "Selenium",
          "Maven",
          "Spring",
          "Python",
          "Java",
          "C#",
          "PHP",
          "C",
        ]

        const options = {
          radius: 300,
          maxSpeed: "normal",
          initSpeed: "normal",
          keep: true,
        }

        TagCloud(containerRef.current, texts, options)
        isInitializedRef.current = true
      } catch (error) {
        console.error("Error initializing TagCloud:", error)
      }
    }

    // Cleanup function
    return () => {
      if (isInitializedRef.current && containerRef.current) {
        // The TagCloud library doesn't have a built-in cleanup method
        // This is a workaround to remove the content
        if (containerRef.current.children.length > 0) {
          containerRef.current.innerHTML = ""
        }
        isInitializedRef.current = false
      }
    }
  }, [])

  return (
    <div className="text-sphere flex items-center justify-center h-[400px]">
      <div ref={containerRef} className="tagcloud text-purple-300"></div>
    </div>
  )
}

