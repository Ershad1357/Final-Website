import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const navigation = {
    company: [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ],
    services: [
        { name: 'Digital Marketing', href: '/services#digital-marketing' },
        { name: 'SEO', href: '/services#seo' },
        { name: 'Social Media', href: '/services#social-media' },
        { name: 'Web Development', href: '/services#web-development' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Impressum', href: '/impressum' },
    ],
    social: [
        { name: 'LinkedIn', href: '#', icon: FaLinkedin },
        { name: 'Twitter', href: '#', icon: FaTwitter },
        { name: 'Instagram', href: '#', icon: FaInstagram },
        { name: 'Facebook', href: '#', icon: FaFacebook },
        { name: 'TikTok', href: '#', icon: FaTiktok },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-corporate-dark text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold text-primary">R</span>
                            <span className="ml-2 text-xl font-semibold text-white">Rastin Group</span>
                        </Link>
                        <p className="mt-4 text-gray-300">
                            Expert digital marketing solutions for businesses in Iran and Germany.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-300 hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-300 hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>123 Business Street</li>
                            <li>Berlin, Germany</li>
                            <li>+49 123 456 789</li>
                            <li>info@rastingroup.de</li>
                        </ul>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                {navigation.legal.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-gray-300 hover:text-primary transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            {navigation.social.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-300 hover:text-primary transition-colors"
                                        aria-label={item.name}
                                    >
                                        <Icon className="h-6 w-6" />
                                    </Link>
                                )
                            })}
                        </div>
                        <p className="text-gray-300 text-sm">
                            © {new Date().getFullYear()} Rastin Group. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
} 