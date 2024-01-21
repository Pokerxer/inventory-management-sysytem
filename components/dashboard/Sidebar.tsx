"use client"


import { LiaOpencart } from "react-icons/lia";
import { GoChevronLeft } from "react-icons/go";
import { TbHome } from "react-icons/tb";
import { GiCash } from "react-icons/gi"
import { HiOutlineShoppingCart, HiMiniShoppingBag } from "react-icons/hi2";
import { GrConnect } from "react-icons/gr";
import { IoStatsChart } from "react-icons/io5";
import { BsFolder2Open } from "react-icons/bs";
import { MdOutlinePointOfSale } from "react-icons/md";

import Link from "next/link";
import { useRouter } from "next/navigation";
import SubscriptionCard from "./SubscriptionCard";

type NavList = {
    title: string,
    link: string
    icon: any
    active: boolean
    className?: string
    children?: NavList[]
}

const navList: NavList[] = [
    {
        title: 'Home',
        link: 'home/overview',
        icon: <TbHome className="w-4 h-4" />,
        active: true,
        className: "bg-blue-600 hover:bg-blue-700"
    },
    {
        title: "inventory",
        link: "inventory",
        icon: <GiCash className="w-4 h-4" />,
        active: false,
        className: "hover:bg-gray-800"
    },
    {
        title: "sales",
        link: "sales",
        icon: <HiOutlineShoppingCart className="w-4 h-4"/>,
        active: false,
        className: "mt-2 hover:bg-gray-800"
    },
    {
        title: "purchases",
        link: "purchases",
        icon: <HiMiniShoppingBag className="w-4 h-4" />,
        active: false,
        className: "hover:bg-gray-800"
    },
    {
        title: "point of sale",
        link: "pointofsale",
        icon: <MdOutlinePointOfSale className="w-4 h-4" />,
        active: false,
        className: "hover:bg-gray-800"
    },
    {
        title: "integrations",
        link: "integrations",
        icon: <GrConnect className="w-4 h-4" />,
        active: false,
        className: "mt-2 hover:bg-gray-800"
    },
    {
        title: "reports",
        link: "reports",
        icon: <IoStatsChart className="w-4 h-4" />,
        active: false,
        className: "mt-2 hover:bg-gray-800"
    },
    {
        title: "documents",
        link: "documents",
        icon: <BsFolder2Open className="w-4 h-4" />,
        active: false,
        className: "mt-2 hover:bg-gray-800"
    }
]

export default function Sidebar() {
    const router = useRouter()

    return (
        <div className="w-56 min-h-screen bg-slate-900 text-slate-100 justify  ">
            {/* Top part */}
            <div className="flex flex-col">


                {/* Logo */}
                <div className="flex items-center space-x-2 bg-gray-950 p-2">
                    <LiaOpencart className="w-8 h-8" />
                    <h1 className="text-xl ">Inventory</h1>
                </div>


                {/* links */}
                <nav className="flex flex-col p-2 text-sm capitalize font-light gap-1">
                    {navList.map((items, index) => (
                        <button 
                        key={index}
                        onClick={() => router.push(`/dashboard/${items.link}`)} 
                        className={`flex items-center space-x-2 px-3 py-2 rounded-md  ${items.className}`}>
                                {items.icon}
                                <h3 className="bg-transparent capitalize">{items.title}</h3> 
                        </button>
                    ))}
                </nav>
                {/* Bottom part */}


                {/* Subscription */}
                <SubscriptionCard />
                {/* Footer Icon */}
                <div className="flex items-center space-x-2 bg-gray-950 p-2 justify-center">
                    <GoChevronLeft className="w-6 h-6" />
                </div>
            </div>

        </div>
    )
}