"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SuccessModal } from "@/components/success-modal"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  formType: "consultation" | "project" | "pricing" | "service"
  selectedPlan?: string
  selectedService?: string
  serviceTimeline?: string
}

export function ContactModal({
  isOpen,
  onClose,
  formType,
  selectedPlan,
  selectedService,
  serviceTimeline,
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    selectedPlan: selectedPlan || "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType,
          selectedPlan: selectedPlan || formData.selectedPlan,
          selectedService,
          serviceTimeline,
        }),
      })

      if (response.ok) {
        setIsSuccessModalOpen(true)
        setFormData({ name: "", email: "", purpose: "", selectedPlan: "" })
        onClose()
      }
    } catch (error) {
      console.error("Error sending form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const getTitle = () => {
    switch (formType) {
      case "consultation":
        return "Book Free Consultation"
      case "project":
        return "Start Your Project"
      case "pricing":
        return "Get Started"
      case "service":
        return `Get Started - ${selectedService}`
      default:
        return "Contact Us"
    }
  }

  return (
    <>
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
              className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">{getTitle()}</h2>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                  />
                </div>

                {selectedPlan && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Selected Plan</label>
                    <Input value={selectedPlan} disabled className="bg-slate-50" />
                  </div>
                )}

                {selectedService && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Selected Service</label>
                    <Input value={selectedService} disabled className="bg-slate-50" />
                  </div>
                )}

                {serviceTimeline && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Timeline</label>
                    <Input value={serviceTimeline} disabled className="bg-slate-50" />
                  </div>
                )}

                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-slate-700 mb-2">
                    Purpose / Project Details *
                  </label>
                  <Textarea
                    id="purpose"
                    name="purpose"
                    required
                    value={formData.purpose}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project or what you'd like to discuss..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        message="Thank you for contacting us! You will hear from us within 24 hours."
      />
    </>
  )
}
