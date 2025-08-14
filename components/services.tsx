"use client"

import { motion } from "framer-motion"
import { Bot, Workflow, Code, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react" // Import useState
import { ServiceModal } from "@/components/service-modal"

export function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      icon: Workflow,
      title: "AI Workflows",
      description:
        "Streamline your business processes with intelligent automation that learns and adapts to your needs.",
      features: ["Process Automation", "Data Analysis", "Predictive Analytics", "Custom AI Models"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bot,
      title: "Chatbot Integration",
      description: "Deploy sophisticated chatbots that provide 24/7 customer support and drive engagement.",
      features: ["Natural Language Processing", "Multi-platform Integration", "Analytics Dashboard", "Custom Training"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build lightning-fast, responsive websites that convert visitors into customers.",
      features: ["React/Next.js", "Mobile-First Design", "Performance Optimization", "CMS Integration"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate search rankings with data-driven SEO strategies and technical optimization.",
      features: ["Technical SEO", "Content Strategy", "Local SEO", "Performance Monitoring"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive AI and web solutions designed to transform your business operations and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 bg-transparent"
                  onClick={() => setSelectedService(service.title)}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          serviceTitle={selectedService}
        />
      </div>
    </section>
  )
}
