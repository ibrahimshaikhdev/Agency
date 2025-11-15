"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Manual customer support overwhelming team",
      solution: "AI chatbot with 24/7 support capabilities",
      results: [
        { metric: "85%", label: "Reduction in support tickets" },
        { metric: "3x", label: "Faster response times" },
        { metric: "$50K", label: "Annual cost savings" },
      ],
      testimonial:
        "DevMora's AI chatbot transformed our customer support. We're now handling 3x more inquiries with the same team size.",
      author: "Sarah Chen, CTO",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      company: "GreenLeaf Retail",
      industry: "E-commerce",
      challenge: "Low website conversion rates",
      solution: "Complete website redesign with AI-powered personalization",
      results: [
        { metric: "150%", label: "Increase in conversions" },
        { metric: "40%", label: "Faster page load times" },
        { metric: "200%", label: "Mobile traffic growth" },
      ],
      testimonial:
        "The new website not only looks amazing but performs incredibly well. Our sales have doubled since launch.",
      author: "Mike Rodriguez, Founder",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge: "Complex loan approval process",
      solution: "AI workflow automation for loan processing",
      results: [
        { metric: "70%", label: "Faster loan approvals" },
        { metric: "95%", label: "Accuracy improvement" },
        { metric: "60%", label: "Operational cost reduction" },
      ],
      testimonial: "The AI automation has revolutionized our loan processing. What used to take days now takes hours.",
      author: "Jennifer Park, Operations Director",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Success Stories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how we've helped businesses transform their operations and achieve remarkable results.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{caseStudies[currentSlide].company}</h3>
                    <p className="text-slate-600 text-lg">{caseStudies[currentSlide].industry}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Challenge</h4>
                    <p className="text-slate-600 mb-6">{caseStudies[currentSlide].challenge}</p>

                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Solution</h4>
                    <p className="text-slate-600">{caseStudies[currentSlide].solution}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {caseStudies[currentSlide].results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{result.metric}</div>
                        <div className="text-sm text-slate-600">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-blue-500 pl-6 mb-4">
                    <p className="text-slate-700 italic mb-3">"{caseStudies[currentSlide].testimonial}"</p>
                    <cite className="text-slate-600 font-medium">— {caseStudies[currentSlide].author}</cite>
                  </blockquote>
                </div>

                <div className="relative h-64 lg:h-auto">
                  <img
                    src={caseStudies[currentSlide].image || "/placeholder.svg"}
                    alt={caseStudies[currentSlide].company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-blue-600" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
