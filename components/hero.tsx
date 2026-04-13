"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight lg:text-4xl"
          >
            Your Growth Engine for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI, Automation & Web.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your business with cutting-edge AI workflows, intelligent chatbot automation, and lightning-fast
            web solutions that drive real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg"
              onClick={() => setIsContactModalOpen(true)}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-slate-300 hover:bg-slate-50 bg-transparent"
              onClick={() => {
                document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Zap, title: "AI Workflows", desc: "Automate complex business processes" },
            { icon: Globe, title: "Smart Chatbots", desc: "Intelligent customer interactions" },
            { icon: Globe, title: "Web Excellence", desc: "Fast, responsive, SEO-optimized sites" },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} formType="project" />
    </section>
  )
}
