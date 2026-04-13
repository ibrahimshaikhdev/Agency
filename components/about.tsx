"use client"

import { motion } from "framer-motion"
import { Award, Users, Lightbulb, Target } from "lucide-react"

export function About() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of the curve, implementing cutting-edge AI technologies to give your business a competitive advantage.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our success. We work closely with you to understand your unique needs and deliver tailored solutions.",
    },
    {
      icon: Award,
      title: "Quality Driven",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Every project is designed with measurable outcomes in mind, ensuring real business impact.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About DevMora</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're a team of passionate developers and AI specialists dedicated to transforming businesses through
            intelligent automation and exceptional web experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded in 2021, DevMora emerged from a simple observation: businesses were struggling to keep up with the
              rapid pace of digital transformation. Traditional web development wasn't enough anymore – companies needed
              intelligent solutions that could adapt, learn, and grow with them.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our founder, with over a decade of experience in both AI research and web development, assembled a team of
              like-minded innovators who shared a vision: to make advanced AI technology accessible to businesses of all
              sizes.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, we're proud to have helped dozens of companies transform their operations, reduce costs, and unlock
              new opportunities through the power of AI automation and intelligent web solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-3xl shadow-2xl">
              <img src="/logo.png" alt="DevMora Logo" loading="lazy" className="w-64 h-64 object-contain" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-3xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-white shadow-lg mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
