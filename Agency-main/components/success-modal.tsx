"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  message: string
}

export function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
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
            className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Success!</h2>
              <p className="text-slate-600">{message}</p>
            </div>

            <Button onClick={onClose} className="w-full bg-slate-900 hover:bg-slate-800 text-white">
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
