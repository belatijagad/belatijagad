'use client'

import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";


const navigations = [
    { href: '/', label: 'Home' },
    { href: '/projects/', label: 'Projects' },
    { href: '/awards/', label: 'Awards' },
    { href: '/blogs/', label: 'Blogs' },
    { href: '/about/', label: 'About' },
]

const socials = [
    { href: 'https://www.kaggle.com/belati', label: 'Kaggle', logo: <span className="font-bold text-2xl">K</span> },
    { href: 'https://github.com/belatijagad', label: 'GitHub', logo: <GithubOutlined />  },
    { href: 'https://www.linkedin.com/in/belati-jagad/', label: 'LinkedIn', logo: <LinkedinOutlined /> },
]

export default function Footer() {
    let [isOpen, setIsOpen] = useState(false)

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 1000)
        } catch (err) {
            console.log("Failed to copy " + err);
        }
    }

    function closeDialog() {
        setIsOpen(false);
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
                        {navigations.map((nav) => (
                            <Link key={nav.label} href={nav.href} className="text-lg" target="_blank">{nav.label}</Link>
                        ))}
                    </div>
                    <div className="col-span-4 flex flex-col gap-1">
                        <h1 className="text-xl font-bold">Social</h1>
                        {socials.map((nav) => (
                            <Link key={nav.label} href={nav.href} className="text-lg flex items-center gap-2" target="_blank">{nav.logo} {nav.label}</Link>
                        ))}
                    </div>
                </div>
                <h1 className="text-center">Copyright @ 2023 Belati Jagad Bintang Syuhada. All rights reserved.</h1>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setIsOpen(false)}>
                    <div className="min-h-screen px-4 text-center">
                        <span className="inline-block h-screen align-bottom" aria-hidden="true">&#8203;</span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-green-600">
                                Success!
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-lg text-gray-500">
                                    Text copied to clipboard!
                                </p>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </footer>
    )
}