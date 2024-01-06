import Image from 'next/image'
import Link from 'next/link'

export default function Showcase({ 
    name,
    text,
    route,
    className,
}: {
    name: string,
    text: string,
    route: string,
    className?: string,
}) {
    return (
        <Link href={route} className={`border-[1px] px-4 py-4 border-gray-500 flex flex-col items-center rounded-lg ${className}`}>
            <h1 className="text-2xl py-4">{name}</h1>
            <Image 
                src={`/${name}.png`}
                alt={`${name}`}
                width={256}
                height={256}
                draggable="false"
            />
            <p>{text}</p>
        </Link>
    )
}