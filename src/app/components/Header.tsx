import Link from "next/link";

const navigations = [
    { href: '/', label: 'Home' },
    { href: '/projects/', label: 'Projects' },
    { href: '/awards/', label: 'Awards' },
    { href: '/blogs/', label: 'Blogs' },
    { href: '/about/', label: 'About' },
]

export default function Header() {
    return(
        <div className="container mx-auto flex flex-row justify-between py-6">
            <div>
                <Link href="/" className="montserrat font-bold text-2xl">Belati Jagad</Link>
            </div>
            <div className="flex flex-row text-xl font-bold gap-8">
                {navigations.map((nav) => (
                    <Link key={nav.label} href={nav.href}>{nav.label}</Link>
                ))}
            </div>
        </div>
    )
}