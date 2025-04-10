"use client"

import Image from "next/image"
import AnimatedSection from "@/components/animated-section"

export default function SublimeSensationProjectPage() {
  return (
    <div className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Sublime Sensation - Layered Design</h1>
            <p className="text-xl text-gray-600 mb-12">
              A digital experience that mirrors the unfolding, layered nature of luxurious products or services.
            </p>
          
          </div>
        </AnimatedSection>
        <div className="mb-12 rounded-xl overflow-hidden">
              <video
                src="/sublimee.mp4"
                controls
                autoPlay
                muted
                loop
                className="w-full h-auto rounded-xl shadow-lg"
              />
        </div>

        <AnimatedSection delay={0.2}>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=1000"
                alt="Sublime Sensation Project Cover"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.3}>
            <div className="mb-16">
              <h2 className="text-3xl font-serif mb-6">Project Overview</h2>
              <p className="text-lg mb-4">
                Sublime Sensation is a digital experience designed for luxury brands that want to showcase their
                products in an elegant, immersive way. The design uses layered animations and transitions to create a
                sense of discovery and delight as users explore the content.
              </p>
              <p className="text-lg">
                The project focused on creating a sensory-rich experience that evokes the same feelings of luxury and
                exclusivity as the physical products themselves.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="mb-16">
              <h2 className="text-3xl font-serif mb-6">Design Process</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sublime Sensation Design Process 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sublime Sensation Design Process 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-lg">
                The design process began with extensive research into luxury brand experiences, both digital and
                physical. We explored how to translate the tactile, sensory aspects of luxury products into a digital
                format, using animations, micro-interactions, and rich media.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="mb-16">
              <h2 className="text-3xl font-serif mb-6">Final Design</h2>
              <p className="text-lg">
                The final design features a layered interface with smooth transitions between sections. As users scroll,
                elements reveal themselves in a choreographed sequence, creating a sense of discovery. The color palette
                uses warm, rich tones that evoke luxury and comfort, while the typography is elegant and refined.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div>
              <h2 className="text-3xl font-serif mb-6">Outcomes & Learnings</h2>
              <p className="text-lg mb-4">
                The Sublime Sensation project was well-received by clients in the luxury sector, who appreciated the
                attention to detail and the way the design elevated their products. The project demonstrated the
                importance of creating digital experiences that align with brand values and evoke emotional responses.
              </p>
              <p className="text-lg">
                Key learnings included the balance between aesthetic beauty and usability, and how to create animations
                that enhance rather than distract from the content.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

