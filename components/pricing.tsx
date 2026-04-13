"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"

export function Pricing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string>("")

  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "one-time setup thereafter $100/month ",
      description: "Perfect for small businesses getting started with AI automation",
      features: [
        "Basic chatbot integration",
        "Simple workflow automation",
        "Responsive website design",
        "Basic SEO optimization",
        "3 months support",
        "Analytics dashboard",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "$2,999",
      period: "one-time",
      description: "Ideal for growing businesses ready to scale with advanced AI",
      features: [
        "Advanced AI chatbot with NLP",
        "Complex workflow automation",
        "Custom web application",
        "Advanced SEO & performance",
        "6 months support",
        "Advanced analytics",
        "API integrations",
        "Custom AI model training",
      ],
      popular: true,
      cta: "Most Popular",
    },
    {
      name: "Custom",
      price: "Let's Talk",
      period: "",
      description: "Enterprise solutions tailored to your specific needs",
      features: [
        "Fully custom AI solutions",
        "Enterprise-grade automation",
        "Scalable web infrastructure",
        "Comprehensive SEO strategy",
        "12 months support",
        "Dedicated account manager",
        "Priority support",
        "Custom integrations",
        "Training & onboarding",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core features with no hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl border-2 p-8 ${
                plan.popular ? "border-blue-500 shadow-2xl scale-105" : "border-slate-200 shadow-lg hover:shadow-xl"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-slate-600 ml-2">{plan.period}</span>}
                </div>
                <p className="text-slate-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
                onClick={() => {
                  setSelectedPlan(plan.name)
                  setIsContactModalOpen(true)
                }}
              >
                {plan.cta}
                {plan.popular && <Zap className="ml-2 w-4 h-4" />}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6">All plans include a 30-day money-back guarantee and free consultation.</p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              setSelectedPlan("Free Consultation")
              setIsContactModalOpen(true)
            }}
          >
            Schedule Free Consultation
          </Button>
        </motion.div>
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          formType="pricing"
          selectedPlan={selectedPlan}
        />
      </div>
    </section>
  )
}
