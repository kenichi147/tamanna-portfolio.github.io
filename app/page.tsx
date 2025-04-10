"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, Bookmark } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <AnimatedSection>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Hey, I'm Tamanna.</h1>
          <h2 className="text-2xl md:text-3xl font-serif mb-6">I am Ui Ux designer, and Frontend Developer.</h2>
          <p className="text-gray-700 mb-8 max-w-xl">
            I specialize in crafting visually compelling and user-centric digital experiences. By blending aesthetics
            with seamless functionality, I design intuitive interfaces that enhance user engagement and deliver
            meaningful interactions.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/tamanna-suman-924b06261/" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.instagram.com/tamanna_xoxo_/" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://www.behance.net/tamannasuman26" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              <Bookmark size={20} />
              <span className="sr-only">Behance</span>
            </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/photo2.jpg?height=600&width=400"
              alt="Tamanna Suman"
              fill
              className="object-cover"
              priority
            />
          </div>
        </AnimatedSection>
      </section>

      {/* Experience Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedSection>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Worked with startups</h3>
                <p>For 2 happy clients</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">3+ Years of Design Experience</h3>
                <p>Across web, mobile, and print</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Leadership</h3>
                <p>For college events</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image src="/approach.jpg?height=700&width=700" alt="Workspace" fill className="object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-serif mb-12">My Approach</h2>

              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Design Thinking & Research</h3>
                <p className="text-gray-700">
                  I approach every project with a user-centered mindset, leveraging design thinking and in-depth
                  research to craft meaningful digital experiences. From understanding user needs to prototyping and
                  iterating, my process ensures that every design decision is intentional, data-driven, and impactful.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-4">Visuals and Aesthetic</h3>
                <p className="text-gray-700">
                  I believe that design is more than just functionality—it's about creating visually compelling
                  experiences that engage and inspire. By blending aesthetics with usability, I craft clean, modern, and
                  intuitive interfaces that look great and enhance the overall user experience.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl font-serif mb-16 text-center">Case Studies</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#f8e6ff] p-8 rounded-3xl h-full">
                <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                  <Image src="/proji21.png?height=200&width=300" alt="Snabb App" fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-serif mb-2">Snabb - A 10-minute stationery</h3>
                <p className="text-gray-700 mb-6">
                  Designed a quick commerce platform that delivers stationery in just 10 minutes. Conducted user
                  research and crafted intuitive designs using skills. Technologies and Tools: Figma, Photoshop.
                </p>
                <Link
                  href="/projects/snabb"
                  className="inline-block border-b-2 border-black pb-1 font-medium hover:opacity-70 transition"
                >
                  View Project
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#fff2e6] p-8 rounded-3xl h-full">
                <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/Proji1.png?height=200&width=300"
                    alt="Sublime Sensation"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">Sublime Sensation - Layered Design</h3>
                <p className="text-gray-700 mb-6">
                  A digital experience that mirrors the unfolding, layered nature of luxurious products or services,
                  specially in context where sensory indulgence in key.
                </p>
                <Link
                  href="/projects/sublime-sensation"
                  className="inline-block border-b-2 border-black pb-1 font-medium hover:opacity-70 transition"
                >
                  View Project
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#e6f4ff] p-8 rounded-3xl h-full">
                <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/Frame3.png?height=200&width=300"
                    alt="StudyMate Platform"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">StudyMate - An e-learning platform to learn skills</h3>
                <p className="text-gray-700 mb-6">
                  A platform where you can learn skills and track your progress. It includes admin section, student
                  section, engaging dashboard, attendance etc.
                </p>
                <Link
                  href="/projects/studymate"
                  className="inline-block border-b-2 border-black pb-1 font-medium hover:opacity-70 transition"
                >
                  View Project
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

