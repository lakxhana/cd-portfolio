"use client"

import type React from "react"

import { useRef } from "react"
import { ArrowDown, Github, Linkedin, Download, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import SkillsSphere from "@/components/skills-sphere"

export default function Home() {
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-1 font-mono text-gray-400 text-lg">
                <p>&lt; html &gt;</p>
                <p>&nbsp; &lt; body &gt;</p>
                <p>&nbsp; &nbsp; &lt; h1 &gt;</p>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif tracking-wider text-white">
                HI,
                <br />
                I'M
                <br />
                <span className="relative inline-block group">
                  LAKXHANA
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white via-purple-600 to-purple-900 group-hover:w-full transition-all duration-300"></span>
                </span>
              </h1>

              <div className="font-mono text-gray-400 text-lg">
                <p>&nbsp; &nbsp; &lt; /h1 &gt;</p>
              </div>

              <p className="text-xl text-gray-200 font-['Lucida_Sans_Typewriter'] max-w-xl">
                a Full Stack Developer with a passion for building innovative and scalable solutions.
              </p>

              <div className="font-mono text-gray-400 text-lg">
                <p>&nbsp; &lt; /body &gt;</p>
                <p>&lt; /html &gt;</p>
              </div>

              {/* Social links and CV download moved to first page */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  className="bg-purple-800 hover:bg-white hover:text-purple-800 transition-all duration-300"
                  onClick={() =>
                    window.open("https://drive.google.com/file/d/15udMH2lhPHobyxDUmeb86iagigmua_4I/view?usp=sharing")
                  }
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>

                <Button
                  variant="ghost"
                  className="text-white hover:bg-white hover:text-purple-800"
                  onClick={() => window.open("https://www.linkedin.com/in/lakxhana-selva-rajah-48750b214/")}
                >
                  <Linkedin className="h-7 w-7" />
                </Button>

                <Button
                  variant="ghost"
                  className="text-white hover:bg-white hover:text-purple-800"
                  onClick={() => window.open("https://github.com/lakxhana?tab=repositories")}
                >
                  <Github className="h-7 w-7" />
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <SkillsSphere />
            </div>
          </div>

          <button
            onClick={() => scrollToSection(aboutSectionRef)}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-label="Scroll to About section"
          >
            <div className="flex flex-col items-center">
              <ArrowDown className="h-8 w-8 text-purple-500" />
            </div>
          </button>
        </section>

        {/* About Section */}
        <section ref={aboutSectionRef} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              About <span className="text-purple-500">Me</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-200">
                  Hello! I am Lakxhana Selva Rajah, a Full Stack Developer, currently studying Computer Science at
                  Universiti Kebangsaan Malaysia (UKM). I have a deep passion for my field, whether it is building small
                  and large scale web and mobile applications, creating memorable digital experiences or taking
                  advantage of the technology around us to solve the problems of our modern world.
                </p>

                <p className="text-lg text-gray-200">
                  I am a Java focused developer for backend (Spring Boot) and for frontend - React.js, with experience
                  working within Python for scripting and automation. I personally enjoy working on the functionality of
                  my work and how that impacts the user experience. I was fortunate enough to work as a Backend Software
                  Engineering Intern, where I was able to gain real-world experience of the field working within the
                  aforementioned Java framework and using automation testing, with the goal of performance optimisation
                  and general backend enhancement. .
                </p>

                <p className="text-lg text-gray-200">
                 Beyond development, I have showcased my skills in hackathons, leadership programs, and global initiatives, securing a Top 5 spot at the Huawei x UMP Hackathon and leading my team to victory in the MMU Future Disruptor Challenge. Representing Malaysia in the National Cadet Corps Youth Exchange Programme in India broadened my global perspective and strengthened my teamwork. Currently, I am exploring AI-driven development, cloud technologies, and mobile app development, staying ahead of industry trends while seeking new opportunities to innovate and collaborate.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Education</h3>
                  <p className="text-gray-300">B.S. Computer Science</p>
                  <p className="text-sm text-gray-400">2023-2025</p>

                  <p className="text-gray-300">Diploma Computer Science</p>
                  <p className="text-sm text-gray-400">2020-2023</p>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Experience</h3>
                  <p className="text-gray-300">Software Engineer Intern</p>
                  <p className="text-sm text-gray-400">2023</p>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Focus Areas</h3>
                  <p className="text-gray-300">Web App, Android App Development, Machine Learning</p>
                </div>

                <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Location</h3>
                  <p className="text-gray-300">Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </div>

            <div className="lg:hidden mt-16 flex justify-center">
              <SkillsSphere />
            </div>

            <div className="mt-16 flex justify-center">
              <button
                onClick={() => scrollToSection(contactSectionRef)}
                className="animate-bounce"
                aria-label="Scroll to Contact section"
              >
                <div className="flex flex-col items-center">
                  <ArrowDown className="h-8 w-8 text-purple-500" />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactSectionRef} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-24">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Contact <span className="text-purple-500">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-lg text-gray-200">
                  I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project
                  in mind or just want to connect!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-900/50 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-300" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-gray-300">lakxhanaselvarajah@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-900/50 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-300" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-gray-300">Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white hover:text-purple-800"
                    onClick={() => window.open("https://www.linkedin.com/in/lakxhana-selva-rajah-48750b214/")}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>

                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white hover:text-purple-800"
                    onClick={() => window.open("https://github.com/lakxhana?tab=repositories")}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <form className="space-y-4 bg-purple-900/20 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-purple-500/30 bg-purple-900/30 px-3 py-2 text-sm text-white placeholder:text-gray-400"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-purple-500/30 bg-purple-900/30 px-3 py-2 text-sm text-white placeholder:text-gray-400"
                    placeholder="Your email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-purple-500/30 bg-purple-900/30 px-3 py-2 text-sm text-white placeholder:text-gray-400"
                    placeholder="Your message..."
                  />
                </div>

                <Button className="w-full bg-purple-800 hover:bg-white hover:text-purple-800">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

