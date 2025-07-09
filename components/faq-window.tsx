"use client"

import { useState } from "react"
import { HelpCircle, ChevronRight, ChevronDown } from "lucide-react"

export default function FaqWindow() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer:
        "I work primarily with JavaScript/TypeScript, React, Node.js, C++ and Python. I also have experience with cloud platforms like AWS and modern DevOps practices.",
    },
    {
      question: "Are you available for freelance work?",
      answer:
        "Yes! I'm currently accepting freelance projects. Feel free to reach out through the contact section to discuss your requirements.",
    },
    {
      question: "How do you approach new projects?",
      answer:
        "I start with understanding the requirements, then create a technical specification, set up the development environment, and follow agile development practices.",
    },
    {
      question: "What's your preferred working style?",
      answer:
        "I enjoy both collaborative team environments and independent work. I'm comfortable with remote work and use modern collaboration tools.",
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-gray-700">
        <HelpCircle className="w-6 h-6 text-yellow-400" />
        <div>
          <h2 className="text-xl text-gray-100">Help</h2>
          <p className="text-sm text-gray-500">~/help/faq.md</p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-2">
        <div className="text-green-400 text-sm mb-3">Frequently asked questions:</div>
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 bg-gray-800 rounded overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-700 transition-colors"
            >
              {openIndex === index ? (
                <ChevronDown className="w-4 h-4 text-green-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-green-400" />
              )}
              <span className="text-gray-300 flex-1">{faq.question}</span>
            </button>
            {openIndex === index && (
              <div className="px-3 pb-3 border-t border-gray-700">
                <div className="pt-3 text-sm text-gray-400 leading-relaxed">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Help command */}
      <div className="mt-6 p-3 bg-gray-800 border border-gray-700 rounded">
        <div className="text-green-400 text-xs mb-1">$ man portfolio</div>
        <div className="text-gray-400 text-xs">Use the commands above to navigate or contact for more help.</div>
      </div>
    </div>
  )
}
