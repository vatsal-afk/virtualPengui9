"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I primarily work with C++, React, TypeScript, Node.js, and Python. I also have experience with various databases, cloud platforms, and modern development tools.",
    },
    {
      question: "Are you available for freelance work?",
      answer:
        "Yes! I'm always open to discussing interesting projects. Feel free to reach out through the contact section to discuss your needs.",
    },
    {
      question: "Do you work with teams or solo?",
      answer:
        "I enjoy both! I have experience working in agile teams as well as handling projects independently from conception to deployment.",
    },
  ]

  return (
    <div className="py-8">
      <h2 className="text-3xl font-light text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-3 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
