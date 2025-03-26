'use client'

import { motion } from 'framer-motion'
import { FaChartLine, FaUsers, FaGlobe } from 'react-icons/fa'

const metrics = [
    {
        label: 'Traffic Increase',
        value: '3x',
        icon: FaChartLine,
    },
    {
        label: 'Time Period',
        value: '6 months',
        icon: FaGlobe,
    },
    {
        label: 'Market Share',
        value: '20%',
        icon: FaUsers,
    },
]

export default function CaseStudy() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-4">
                        Success Story
                    </h2>
                    <p className="text-xl text-corporate-gray max-w-2xl mx-auto">
                        See how we helped ABC Startup achieve remarkable growth in the German market.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-corporate-light p-6 rounded-xl mb-8">
                            <h3 className="text-2xl font-semibold text-corporate-dark mb-4">
                                ABC Startup
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-corporate-dark mb-2">Challenge</h4>
                                    <p className="text-corporate-gray">
                                        Low online visibility in the German market and struggling to reach target audience effectively.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-corporate-dark mb-2">Solution</h4>
                                    <p className="text-corporate-gray">
                                        Comprehensive SEO strategy combined with targeted digital advertising campaigns.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-corporate-dark mb-2">Result</h4>
                                    <p className="text-corporate-gray">
                                        Achieved 3x increase in website traffic and significant improvement in conversion rates.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                            {metrics.map((metric, index) => {
                                const Icon = metric.icon
                                return (
                                    <motion.div
                                        key={metric.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-center p-4 bg-white rounded-lg shadow-sm"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="text-2xl font-bold text-primary mb-1">
                                            {metric.value}
                                        </div>
                                        <div className="text-sm text-corporate-gray">
                                            {metric.label}
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    {/* Testimonial */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-corporate-light p-8 rounded-xl">
                            <div className="text-4xl text-primary mb-4">"</div>
                            <blockquote className="text-xl text-corporate-dark mb-6">
                                Rastin Group made all the difference! Their expertise in the German market and data-driven approach helped us achieve remarkable growth.
                            </blockquote>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                    <span className="text-xl font-bold text-primary">JD</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-corporate-dark">John Doe</div>
                                    <div className="text-corporate-gray">CEO, ABC Startup</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 