'use client'

import { motion } from 'framer-motion'
import { FaLightbulb, FaHandshake, FaChartBar, FaExchangeAlt } from 'react-icons/fa'

const values = [
    {
        title: 'Innovation',
        description: 'Cutting-edge solutions with the latest trends and technologies.',
        icon: FaLightbulb,
    },
    {
        title: 'Transparency',
        description: 'Open and honest partnerships with clear communication.',
        icon: FaHandshake,
    },
    {
        title: 'Results-Oriented',
        description: 'Data-driven strategies with measurable outcomes.',
        icon: FaChartBar,
    },
    {
        title: 'Adaptability',
        description: 'Tailored strategies for unique markets and cultures.',
        icon: FaExchangeAlt,
    },
]

export default function AboutUs() {
    return (
        <section className="py-24 bg-corporate-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6">
                            About Rastin Group
                        </h2>
                        <p className="text-xl text-corporate-gray mb-8">
                            We are a results-driven marketing agency dedicated to helping businesses grow and succeed in Iran and Germany. With a strong focus on data-driven strategies, digital innovation, and market expertise, we provide tailored solutions that elevate brands in competitive markets.
                        </p>
                        <p className="text-xl text-corporate-gray mb-8">
                            Our mission is to empower businesses by delivering high-impact marketing solutions that drive visibility, engagement, and revenue. We bridge markets and cultures, ensuring our clients succeed in both Iran and Germany with localized, effective strategies.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                                <div className="text-corporate-gray">Years of Expertise</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                                <div className="text-corporate-gray">Happy Clients</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Values */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-corporate-dark mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-corporate-gray">
                                        {value.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 