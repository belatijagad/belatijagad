import Link from 'next/link'
import Image from 'next/image'
import { sections } from './constants'

interface Content {
    content: string,
    institution: string,
    period: string,
    link?: string,
}

export default function About() {
    return(
        <main className="container mx-auto">
            <div className="min-h-screen grid grid-cols-12 gap-8 items-center">
                <div className="col-span-3 col-start-3">
                    <Image 
                        src="/placeholder_profile.jpg" 
                        alt="My portrait"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} 
                    />
                </div>
                <div className="col-span-6 flex flex-col gap-8 text-lg">
                    <p>
                        My name is Belati Jagad Bintang Syuhada, usually called by my nickname Abel. 
                        I&apos;m an undergraduate student pursuing computer science degree in University of Indonesia.
                        Currently in my fourth semester, I&apos;m diligently strengthening my foundation of computer science
                        in order to learn more about machine learning and artificial intelligence.
                    </p>
                    <p>
                        I dream of becoming a research scientist in the field of machine learning and artificial intelligence
                        in hope of making new breakthroughs that will impact the field in a positive way.
                        To achieve that dream, I participated in many competitions in order to deepen my insight about the true
                        meaning of machine learning.
                    </p>
                    <p>
                        My interest beside studying machine learning is reading japanese/chinese/korean novels and comics, or well
                        known as manga, manhua, and manhwas.
                    </p>
                </div>
            </div>
            {sections.map((section) => (
                <Section key={section.name} title={section.name} contents={section.section} />
            ))}
        </main>
    )
}

function Section({
    title,
    contents,
}: {
    title: string,
    contents: Content[],
}) {
    return (
        <div className="py-8">
            <h1 className="text-xl font-bold">{title}</h1>
            <hr />
            {contents.map((data) => (
                data.link != ''
                    ? <Showcase key={data.content} content={data.content} institution={data.institution} period={data.period} link={data.link} />
                    : <Showcase key={data.content} content={data.content} institution={data.institution} period={data.period} />
            ))}
        </div>
    )
}

function Showcase({ 
    content,
    institution,
    period,
    link,
}: {
    content: string,
    institution: string,
    period: string,
    link?: string,
}) {
    return (
        <div className="flex flex-col gap-1 py-4">
            <div className="flex flex-row gap-4">
                {link != null
                    ? <Link href={link} target="_blank" className="font-bold">{content}</Link> 
                    : <h2 className="font-bold">{content}</h2>}
                <p>{institution}</p>
            </div>
            <p>{period}</p>
        </div>
    )
}