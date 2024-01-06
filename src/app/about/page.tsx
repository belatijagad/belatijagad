export default function About() {
    return(
        <main className="container mx-auto">
            <Me />
            <Education />
            <Experience />
            <Honors />
            <Certifications />
        </main>
    )
}

function Me() {
    return(
        <div className="min-h-screen">
            Ini tentang diriku
        </div>
    )
}

function Education() {
    return(
        <div className="">
            Ini tentang edukasiku
        </div>
    )
}

function Experience() {
    return(
        <div className="">
            Ini tentang pengalamanku
        </div>
    )
}

function Honors() {
    return(
        <div className="">
            Ini tentang pencapaianku
        </div>
    )
}

function Certifications() {
    return(
        <div className="">
            Ini tentang sertifikasiku
        </div>
    )
}