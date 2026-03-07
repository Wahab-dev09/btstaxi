import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'
import Breadcrumb from '@/app/Components/Breadcrumb'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <main className="bg-neutral-900 min-h-screen font-dm-sans">
                {children}
            </main>
            <Footer />
        </>
    )
}