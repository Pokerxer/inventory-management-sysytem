import React from 'react'

type Props = {}

export default function SubscriptionCard({ }: Props) {
    return (
        <div className="py-1 mx-2 my-5 text-xs text-gray-50 font-light bg-gray-950 rounded-md">
            <div className="flex flex-col">
                <div className="border-l-2 mx-2 border-yellow-500 rounded-sm">
                    <div className="ml-2">
                        Your Premium plan trial expires in
                        <span className="text-yellow-500"> 9 days</span>
                    </div>
                </div>
                <div className="flex mt-1 border-t border-gray-500 ">
                    <div>
                        <button className="px-3 py-2 hover:text-yellow-500">Change Plan</button>
                    </div>
                    <div className="border border-gray-500"></div>
                    <div>
                        <button className="px-3 py-2 hover:text-yellow-500">Upgrade</button>
                    </div>
                </div>
            </div>
        </div>
    )
}