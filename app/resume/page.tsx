"use client"

import Image from "next/image"
import AnimatedSection from "@/components/animated-section"

export default function ResumePage() {
  return (
    <div className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-serif mb-12 text-center">My Resume</h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="relative w-full h-[800px] md:h-[1100px]">
              <Image
                src="/resume_ux_tamanna2.jpg?height=1100&width=800"
                alt="Tamanna Suman Resume"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-8 text-center">
              <a
                href="/placeholder.svg?height=1100&width=800"
                download="Tamanna_Suman_Resume.pdf"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

