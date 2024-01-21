import { IoLogoDropbox } from "react-icons/io";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaFileInvoiceSolid } from "react-icons/lia";

type SalesProp = {
    title: string
    value: number
    unit: string
    icon: any
    className?: string
}

type OrderProp = {
    title: string
    value: number
}

const salesProp: SalesProp[] = [
    {
        title: 'to be packed',
        value: 0,
        unit: 'Qty',
        icon: <IoLogoDropbox className="w-3 h-3" />,
        className: "text-blue-600"
    },
    {
        title: 'to be shipped',
        value: 0,
        unit: 'Pkgs',
        icon: <HiMiniShoppingCart className="w-3 h-3" />,
        className: "text-red-600"
    },
    {
        title: 'to be delivered',
        value: 0,
        unit: 'Pkgs',
        icon: <TbTruckDelivery className="w-3 h-3" />,
        className: "text-green-600"
    },
    {
        title: 'to be invoiced',
        value: 0,
        unit: 'Qty',
        icon: <LiaFileInvoiceSolid className="w-3 h-3" />,
        className: "text-yellow-600"
    },
]

const orderProp: OrderProp[] = [
    {
        title: 'quantity on hand',
        value: 0
    },
    {
        title: 'quantity to be received',
        value: 0
    }
]

export default function InventoryOverview() {
    return (
        <div className='p-8 bg-gray-50'>
            {/* Sales Activities */}
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8 flex flex-col space-y-3">
                    <h2 className=" text-gray-900">Sales Activity</h2>
                    <div className="flex space-x-3 ">
                        {salesProp.map((items, index) => (
                            <div key={index} className="flex flex-col items-center justify-center space-y-3 p-4 hover:shadow max-w-max bg-white border border-gray-100 hover:border-gray-300 rounded-md ">
                                <div className={`text-4xl font-medium mt-2 ${items.className}`}>0</div>
                                <p className="text-sm">{items.unit}</p>
                                <div className="flex items-center space-x-1">
                                    <div className="border border-gray-400 rounded-full p-1">{items.icon}</div>
                                    <p className="text-xs uppercase">{items.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Inventory Activities */}
                <div className='col-span-4 w-full space-y-3'>
                    <h2>
                        Inventory Summary
                    </h2>
                    <div className="flex flex-col gap-4">
                        {orderProp.map((items, index) => (
                            <div key={index} className="px-4 py-3 text-sm bg-white rounded-md hover:shadow hover:border-gray-300 border border-gray-100 flex items-center justify-between">
                                <div className="uppercase">{items.title}</div>
                                <span>{items.value}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    )
}