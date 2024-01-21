"use client"

import { PiBuildingsLight } from "react-icons/pi";
import Background from "@/assets/image/p75Yz0.jpg"
import { usePathname } from "next/navigation";
import Link from "next/link";

type HomeNavList = {
    title: string,
    link: string
    active: boolean
    className?: string
    children?: HomeNavList[]
}

const HomeNavList: HomeNavList[] = [
    {
        title: 'Overview',
        link: '/dashboard/home/overview',
        active: true,
        className: ""
    },
    {
        title: 'Getting Started',
        link: '/dashboard/home/getting-started',
        active: true,
        className: ""
    },
    {
        title: 'Recent updates',
        link: '/dashboard/home/updates',
        active: true,
        className: ""
    },
    {
        title: 'Announcements',
        link: '/dashboard/home/announcement',
        active: true,
        className: ""
    },
]

export default function HomeNavbar() {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className="pt-5 pb-3 border-b border-gray-300 text-gray-600 hover:text-gray-800 header-bg " >
            <div className="flex mx-5">
                <div className="p-3 border border-gray-300 bg-gray-50 rounded-md">
                    <PiBuildingsLight className="w-5 h-5" />
                </div>
                <div className="flex flex-col capitalize ml-3">
                    <div className="text-lg text-gray-900 font-semibold">Hello,
                        <span> Jrwaldehzx</span>
                    </div>
                    <div className="text-gray-500 text-xs">
                        drinks harbour
                    </div>
                </div>
            </div>

            {/* link */}
            <nav className="mt-5 ml-3 space-x-5 text-sm sticky bottom-0">
                {
                    HomeNavList.map((items, index) => (
                        <Link href={items.link} key={index} className={pathname === items.link ? `border-b-2 border-blue-600  py-3 ` : `py-3`}>
                            {items.title}
                        </Link>
                    ))
                }
            </nav>
        </div>
    )
}