"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: "AI Workflows", href: "#services" },
      { name: "Chatbot Integration", href: "#services" },
      { name: "Web Development", href: "#services" },
      { name: "SEO Optimization", href: "#services" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Pricing", href: "#pricing" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
      { name: "FAQ", href: "#faq" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">DevMora</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Where automation meets intelligent web design. We help businesses transform their operations with
                cutting-edge AI solutions and exceptional web experiences.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>fahad.prime7@gmail.com</span>
                </div>
                <div className="flex items-center text-slate-300">
                  
                  
                </div>
                <div className="flex items-center text-slate-300">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-300 mb-4 md:mb-0">
              <p>&copy; {currentYear} DevMora. All rights reserved.</p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <div className="hidden md:flex items-center space-x-6 text-sm text-slate-400">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
