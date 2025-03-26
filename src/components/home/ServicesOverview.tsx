'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaChartLine, FaUsers, FaGlobe } from 'react-icons/fa'

const services = [
    {
        title: 'Digital Marketing Strategy',
        description: 'Comprehensive digital marketing strategies tailored to your business goals and target markets.',
        icon: FaChartLine,
        href: '/services#digital-marketing',
    },
    {
        title: 'Social Media Management',
        description: 'Engaging social media presence management across multiple platforms and cultures.',
        icon: FaUsers,
        href: '/services#social-media',
    },
    {
        title: 'Market Entry Consulting',
        description: 'Expert guidance for entering and succeeding in both Iranian and German markets.',
        icon: FaGlobe,
        href: '/services#market-entry',
    },
]

export default function ServicesOverview() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
                        Our Key Services
                    </h2>
                    <p className="text-xl text-corporate-gray max-w-2xl mx-auto">
                        Comprehensive digital marketing solutions to help your business thrive in both markets.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <Link
                                    href={service.href}
                                    className="block p-6 rounded-xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-200"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-corporate-dark mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-corporate-gray">
                                        {service.description}
                                    </p>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                    >
                        View All Services
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
} 