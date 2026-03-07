'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routeNames: Record<string, string> = {
    'privacy-policy': 'Privacy Policy',
    'terms-of-use': 'Terms & Conditions',
    'refund-policy': 'Refund Policy',
}

const Breadcrumb = () => {
    const pathname = usePathname()
    const segments = pathname.split('/').filter(Boolean)

    return (
        <nav className="w-full pt-30 bg-neutral-900 py-3">
            <div className="w-[90%] max-w-350 mx-auto flex items-center gap-2 font-dm-sans text-sm">
                <Link href="/" className="text-[#FFDB63] hover:text-[#FFDB63]/80 transition-colors font-medium">
                    Home
                </Link>
                {segments.map((segment, index) => {
                    const href = '/' + segments.slice(0, index + 1).join('/')
                    const isLast = index === segments.length - 1
                    const label = routeNames[segment] ?? segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

                    return (
                        <span key={href} className="flex items-center gap-2">
                            <span className="text-white/30">/</span>
                            {isLast ? (
                                <span className="text-white/60">{label}</span>
                            ) : (
                                <Link href={href} className="text-[#FFDB63] hover:text-[#FFDB63]/80 transition-colors font-medium">
                                    {label}
                                </Link>
                            )}
                        </span>
                    )
                })}
            </div>
        </nav>
    )
}

export default Breadcrumb