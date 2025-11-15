"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  serviceTitle: string | null
}

export function ServiceModal({ isOpen, onClose, serviceTitle }: ServiceModalProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const serviceDetails = {
    "AI Workflows": {
      description:
        "Transform your business operations with intelligent automation that learns and adapts to your specific needs.",
      features: [
        "Custom AI model development tailored to your business",
        "Automated data processing and analysis",
        "Predictive analytics for better decision making",
        "Integration with existing business systems",
        "Real-time monitoring and optimization",
        "Scalable cloud-based infrastructure",
      ],
      benefits: [
        "Reduce operational costs by up to 60%",
        "Increase processing speed by 10x",
        "Minimize human errors and improve accuracy",
        "24/7 automated operations",
        "Data-driven insights for strategic planning",
      ],
      timeline: "6-12 weeks",
    },
    "Chatbot Integration": {
      description:
        "Deploy sophisticated AI chatbots that provide exceptional customer service and drive engagement across all platforms.",
      features: [
        "Natural Language Processing (NLP) capabilities",
        "Multi-platform integration (website, WhatsApp, Facebook)",
        "Sentiment analysis and emotion detection",
        "Advanced conversation flows and logic",
        "Analytics dashboard with detailed insights",
        "Custom training on your business data",
      ],
      benefits: [
        "Handle 80% of customer inquiries automatically",
        "Reduce response time from hours to seconds",
        "Available 24/7 without breaks",
        "Consistent brand voice and messaging",
        "Lead qualification and conversion optimization",
      ],
      timeline: "3-6 weeks",
    },
    "Web Development": {
      description:
        "Build lightning-fast, responsive websites and web applications that convert visitors into customers and drive business growth.",
      features: [
        "React/Next.js modern development stack",
        "Mobile-first responsive design",
        "Advanced SEO optimization",
        "Performance optimization (Core Web Vitals)",
        "Content Management System integration",
        "E-commerce functionality",
      ],
      benefits: [
        "Improve page load speeds by up to 70%",
        "Increase mobile conversion rates",
        "Better search engine rankings",
        "Enhanced user experience and engagement",
        "Scalable architecture for future growth",
      ],
      timeline: "4-8 weeks",
    },
    "SEO Optimization": {
      description:
        "Dominate search rankings with comprehensive SEO strategies that drive organic traffic and increase online visibility.",
      features: [
        "Technical SEO audit and optimization",
        "Keyword research and content strategy",
        "Local SEO for geographic targeting",
        "Link building and authority development",
        "Performance monitoring and reporting",
        "Competitor analysis and insights",
      ],
      benefits: [
        "Increase organic traffic by 150%+",
        "Improve search rankings for target keywords",
        "Higher click-through rates and conversions",
        "Long-term sustainable growth",
        "Better brand visibility and credibility",
      ],
      timeline: "3-6 months",
    },
  }

  const service = serviceTitle ? serviceDetails[serviceTitle as keyof typeof serviceDetails] : null

  if (!service) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-slate-900">{serviceTitle}</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-slate-600 mb-8 text-lg leading-relaxed">{service.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 mb-6">
              <div className="text-center">
                <h4 className="font-semibold text-slate-900 mb-2">Project Timeline</h4>
                <p className="text-slate-600">{service.timeline}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent" onClick={onClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        formType="service"
        selectedService={serviceTitle}
        serviceTimeline={service.timeline}
      />
    </AnimatePresence>
  )
}
