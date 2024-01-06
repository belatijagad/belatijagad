import Link from 'next/link'

interface Content {
    content: string,
    institution: string,
    period: string,
    link?: string,
}

const education = [
    { content: 'Undergraduate Computer Science Student', institution: 'University of Indonesia', period: 'Aug 2022 - Now', link: '' },
]

const experience = [
    { content: 'VPIC of Automation Engineer', institution: 'COMPFEST 15', period: 'Dec 2022 - Nov 2023', link: '' },
    { content: 'Website Developer', institution: 'Educare', period: 'Nov 2022 - Mar 2023', link: '' },
]

const honors = [
    { content: 'Dataslayer 1.0 Finalist', institution: 'BEM ITT Purwokerto', period: 'Jan 2024', link: '' },
    { content: 'Airnology 2.0: Innovation Quest 1st Place', institution: 'BEM FTMM Unair', period: 'Oct 2023', link: 'https://www.instagram.com/airnology2.0/' },
    { content: 'Airnology2.0: Objective Quest 3rd Place', institution: 'BEM FTMM Unair', period: 'Oct 2023', link: 'https://www.instagram.com/airnology2.0/' },
    { content: 'Satria Data 2023: Big Data Challenge Semifinalist', institution: 'Puspresnas Kemendikbud', period: 'July 2023', link: 'https://satriadata.kemdikbud.go.id/' },
    { content: 'JOINTS: Data Competition Finalist', institution: 'OmahTI UGM', period: 'May 2023', link: 'https://www.instagram.com/jointsugm/' },
    { content: 'Arkavidia 7.0: Datavidia 2nd Place ', institution: 'HMIF ITB', period: 'Feb 2023', link: 'https://www.instagram.com/arkavidia/' },
    { content: 'Gemastik XV: Data Mining Finalist', institution: 'Puspresnas Kemendikbud', period: 'Aug 2022', link: 'https://gemastik.kemdikbud.go.id/' },
    { content: 'Satria Data 2022: Big Data Challenge Semifinalist', institution: 'Puspresnas Kemendikbud', period: 'July 2022', link: 'https://satriadata.kemdikbud.go.id/' },
]

const certifications = [
    { content: 'IELTS Band 8.0', institution: 'IDP Indonesia', period: 'Oct 2022', link: '' },
]

const sections = [
    { name: 'Education', section: education },
    { name: 'Experience', section: experience },
    { name: 'Certifications', section: certifications },
    { name: 'Honors', section: honors },
]

export default function About() {
    return(
        <main className="container mx-auto">
            <div className="min-h-screen">
                Ini tentang diriku
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