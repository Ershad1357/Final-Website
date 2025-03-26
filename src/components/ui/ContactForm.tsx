'use client'

import { useState } from 'react'
import Button from './Button'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        whatsapp: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement form submission
        console.log('Form submitted:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-corporate-dark mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-corporate-dark mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="your@email.com"
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium text-corporate-dark mb-1">
                    Company
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Your company name"
                />
            </div>

            <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-corporate-dark mb-1">
                    WhatsApp Number
                </label>
                <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="+49 123 456 789"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-corporate-dark mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="How can we help you?"
                />
            </div>

            <Button type="submit" className="w-full">
                Send Message
            </Button>
        </form>
    )
} 