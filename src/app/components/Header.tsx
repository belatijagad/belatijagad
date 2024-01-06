import Link from "next/link";

export default function Header() {
    return(
        <div className="container mx-auto flex flex-row justify-between py-6">
            <div>
                <Link href="/" className="montserrat font-bold text-2xl">Belati Jagad</Link>
            </div>
            <div className="flex flex-row text-xl font-bold gap-8">
                <Link href="/">Home</Link>
                <Link href="/projects/">Projects</Link>
                <Link href="/awards/">Awards</Link>
                <Link href="/blogs/">Blogs</Link>
                <Link href="/about/">About</Link>
            </div>
        </div>
    )
}