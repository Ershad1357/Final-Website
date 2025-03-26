'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../ui/Button'

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
]

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)

    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-primary">R</span>
                        <span className="ml-2 text-xl font-semibold text-corporate-dark">Rastin Group</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-corporate-gray hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Language Switcher */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <button
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className="flex items-center space-x-2 text-corporate-gray hover:text-primary"
                            >
                                <span>🇬🇧</span>
                                <span>EN</span>
                            </button>
                            {isLanguageOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className="w-full text-left px-4 py-2 text-sm text-corporate-gray hover:bg-gray-50"
                                            onClick={() => setIsLanguageOpen(false)}
                                        >
                                            <div className="flex items-center space-x-2">
                                                <span>{lang.flag}</span>
                                                <span>{lang.name}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Button>Get in Touch</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-corporate-gray hover:text-primary"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-base font-medium text-corporate-gray hover:text-primary hover:bg-gray-50 rounded-md"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button className="w-full">Get in Touch</Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
} 