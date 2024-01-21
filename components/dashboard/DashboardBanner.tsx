"use client"

import { useState } from "react";
import Cheque from "@/assets/image/cheque_2715879.png"
import { IoClose } from "react-icons/io5";
import Image from "next/image"


type Props = {}

export default function DashboardBanner({ }: Props) {
    const [hidden, setHiddden] = useState<boolean>(false)
    return (
        <div className={hidden ? `hidden`: `py-6 px-16 grid grid-cols-12 items-center w-full gap-2 bg-white relative`}>
            {/* icons */}
            <div className="col-span-1">
                <Image
                    src={Cheque}
                    alt=''
                    height={80}
                    width={80}
                />
            </div>
            {/* text */}
            <div className="ml-4 col-span-7 flex flex-col gap-3">
                    <h2 className="text-lg font-semibold">Start accepting online payments</h2>
                    <h3 className="text-sm font-light text-gray-700">{`Businesses are moving towards online payments as they're easy, secure and yet fast. try them for your business today`}</h3>
            </div>
            {/* button */}
            <div className="col-span-4 flex justify-center">
                <button className="bg-blue-500 text-gray-50 px-3 py-2 rounded-sm text-sm">
                    Enable
                </button>
            </div>
            {/* textbutton */}
            <button 
            className="absolute top-4 right-8"
            onClick={() => setHiddden(true)}
            >
                <IoClose className="w-4 h-4" />
            </button>
        </div>
    )
}