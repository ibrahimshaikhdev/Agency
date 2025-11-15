"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does it take to implement an AI solution?",
      answer:
        "Implementation timelines vary based on complexity. Simple chatbot integrations can be completed in 2-3 weeks, while comprehensive AI workflow automation typically takes 6-12 weeks. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! All our plans include ongoing support. Starter plans include 3 months of support, Growth plans include 6 months, and Custom plans include 12 months. We also offer extended support packages for long-term partnerships.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely. We specialize in seamless integrations with popular CRM systems, databases, e-commerce platforms, and custom applications. Our team will assess your current tech stack and design solutions that work harmoniously with your existing infrastructure.",
    },
    {
      question: "What makes your AI solutions different from others?",
      answer:
        "Our AI solutions are custom-built for your specific business needs, not generic templates. We focus on practical applications that deliver measurable ROI, and our team combines deep AI expertise with real-world business experience.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "Security is our top priority. We implement enterprise-grade encryption, follow GDPR and other privacy regulations, conduct regular security audits, and can work within your existing security frameworks. All data processing can be kept on-premises if required.",
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer:
        "We offer a 30-day money-back guarantee on all our services. Additionally, we work closely with you throughout the project to ensure expectations are met. Our iterative approach means you're involved in every step of the development process.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes! We include comprehensive training and documentation with all our solutions. Our team will train your staff on how to use and maintain the systems we build, ensuring you can maximize the value of your investment.",
    },
    {
      question: "Can you help with scaling as our business grows?",
      answer:
        "Definitely. All our solutions are built with scalability in mind. We design systems that can grow with your business and provide ongoing optimization services to ensure peak performance as your needs evolve.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">
            Get answers to common questions about our AI automation and web development services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-slate-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-600" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
