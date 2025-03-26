'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import ContactForm from '../ui/ContactForm'

const contactInfo = [
    {
        icon: FaPhone,
        title: 'Phone',
        content: '+49 123 456 789',
        href: 'tel:+49123456789',
    },
    {
        icon: FaEnvelope,
        title: 'Email',
        content: 'info@rastingroup.de',
        href: 'mailto:info@rastingroup.de',
    },
    {
        icon: FaMapMarkerAlt,
        title: 'Address',
        content: '123 Business Street, Berlin, Germany',
        href: 'https://maps.google.com',
    },
]

export default function Contact() {
    return (
        <section className="py-24 bg-corporate-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-corporate-gray max-w-2xl mx-auto">
                        Ready to grow your business? Contact us today for a free consultation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-xl shadow-sm"
                    >
                        <ContactForm />
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-semibold text-corporate-dark mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon
                                    return (
                                        <motion.a
                                            key={info.title}
                                            href={info.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start space-x-4 group"
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-corporate-dark mb-1">
                                                    {info.title}
                                                </h4>
                                                <p className="text-corporate-gray">
                                                    {info.content}
                                                </p>
                                            </div>
                                        </motion.a>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-2xl font-semibold text-corporate-dark mb-6">
                                Business Hours
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-corporate-gray">Monday - Friday</span>
                                    <span className="font-medium text-corporate-dark">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-corporate-gray">Saturday</span>
                                    <span className="font-medium text-corporate-dark">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-corporate-gray">Sunday</span>
                                    <span className="font-medium text-corporate-dark">Closed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 