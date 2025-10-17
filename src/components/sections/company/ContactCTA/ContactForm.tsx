'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import Button from '@/components/common/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="p-12 max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-3 text-lg font-semibold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none"
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--color-text-primary)',
              }}
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-3 text-lg font-semibold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none"
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--color-text-primary)',
              }}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-3 text-lg font-semibold"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 resize-none transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none"
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--color-text-primary)',
              }}
              placeholder="Tell us about your inquiry..."
            />
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth>
            Send Message
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
