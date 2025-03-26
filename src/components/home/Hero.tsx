'use client'

import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-corporate-dark mb-6">
                            Grow Your Business in{' '}
                            <span className="text-primary">Iran</span> and{' '}
                            <span className="text-secondary">Germany</span>
                        </h1>
                        <p className="text-xl text-corporate-gray mb-8 max-w-2xl mx-auto lg:mx-0">
                            Expert digital marketing solutions that bridge markets and cultures. We help you succeed with data-driven strategies and innovative solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg">Get in Touch</Button>
                            <Button variant="outline" size="lg">Learn More</Button>
                        </div>
                    </motion.div>

                    {/* Image/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                            {/* Placeholder for hero image/illustration */}
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-6xl">🚀</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
            </div>
        </section>
    )
} 