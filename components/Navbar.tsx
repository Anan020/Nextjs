'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar: React.FC= () => {
    const pathname = usePathname()

    const navLinks = [
        { label: "Home", href: '/' },
        { label: "About me", href: '/about' },
        { label: "Experience", href: '/experience' },
        { label: "Project", href: '/project' },
        { label: "Skill", href: '/skill' },
    ]

    return (
        <>
            <nav>
                <div className="flex max-w-1/2">
                    <div className='flex flex-col gap-4 text-lg w-full mx-2'>
                        {
                            navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`transition-colors duration-200 ${isActive
                                            ? 'text-green-700  border-l-1 px-2  py-1 '
                                            : ' hover:bg-gray-600 hover:text-white px-2  py-1  rounded-sm'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
