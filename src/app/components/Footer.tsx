'use client'

import Link from "next/link";

export default function Footer() {
    const copyToClipboard = async (text: string) => {
        console.log("clicked");
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.log("Failed to copy " + err);
        }
    }
    const email = "belatijagadbintangsyuhada@gmail.com";

    return(
        <footer className="bg-zinc-950 text-white">
            <div className="container mx-auto flex flex-col gap-8 py-8">
                <div className="">
                    <h1 className="text-2xl">Ready to catalyse your work?</h1>
                    <Link href="/">Work with me</Link>
                </div>
                <div className="grid grid-cols-12 justify-between">
                    <div className="col-span-4">
                        <h1 className="text-xl font-bold">Contact</h1>
                        <p onClick={() => copyToClipboard(email)} className="hover:cursor-pointer text-lg">{email}</p>
                    </div>
                    <div className="col-span-4 flex flex-col gap-1">
                        <h1 className="text-xl font-bold">Site</h1>
                        <Link className="text-lg" href="/">Home</Link>
                        <Link className="text-lg" href="/projects/">Projects</Link>
                        <Link className="text-lg" href="/awards/">Awards</Link>
                        <Link className="text-lg" href="/blogs/">Blogs</Link>
                        <Link className="text-lg" href="/about/">About</Link>
                    </div>
                    <div className="col-span-4 flex flex-col gap-1">
                        <h1 className="text-xl font-bold">Social</h1>
                        <Link className="text-lg" href="https://www.kaggle.com/belati" target="_blank">Kaggle</Link>
                        <Link className="text-lg" href="https://github.com/belatijagad" target="_blank">GitHub</Link>
                        <Link className="text-lg" href="https://www.linkedin.com/in/belati-jagad/" target="_blank">LinkedIn</Link> 
                    </div>
                </div>
                <h1 className="text-center">Copyright @ 2023 Belati Jagad Bintang Syuhada. All rights reserved.</h1>
            </div>
        </footer>
    )
}