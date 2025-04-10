"use client"

import Image from "next/image"
import AnimatedSection from "@/components/animated-section"

export default function StudymateProjectPage() {
  return (
    <div className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">StudyMate - An e-learning platform</h1>
            <p className="text-xl text-gray-600 mb-12">
              A platform where you can learn skills and track your progress.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto mb-16">
            <img src="/frame3.png" alt="Frame 2" width="1200" height="1000" />
            <img src="/frame4.png" alt="Frame 4" width="1200" height="1000" />
            <img src="/frame5.png" alt="Frame 5" width="1200" height="1000" />
            <img src="/frame6.png" alt="Frame 6" width="1000" height="700" />
            <img src="/frame7.png" alt="Frame 7" width="1000" height="700" />
            <img src="/frame8.png" alt="Frame 8" width="1000" height="700" />
            <img src="/frame9.png" alt="Frame 9" width="1000" height="700" />
            <img src="/frame11.png" alt="Frame 11" width="1000" height="700" />
            <img src="/frame12.png" alt="Frame 12" width="1000" height="700" />
            <img src="/frame13.png" alt="Frame 13" width="1000" height="700" />
            <img src="/frame14.png" alt="Frame 14" width="1000" height="700" />
            <img src="/frame15.png" alt="Frame 15" width="1000" height="700" />
          
        </div>

        <div className="max-w-4xl mx-auto">

          <AnimatedSection delay={0.6}>
            <div>
              <h2 className="text-3xl font-serif mb-6">Outcomes & Learnings</h2>
              <p className="text-lg mb-4">
                StudyMate has been successfully implemented in an educational institutions Pathbreakers, with positive feedback
                from both students and administrators. The platform has helped increase student engagement and
                completion rates for online courses.
              </p>
              <p className="text-lg">
                Key learnings included the importance of designing for different user roles and needs, and how to create
                interfaces that support focused learning while still being engaging and motivating.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

