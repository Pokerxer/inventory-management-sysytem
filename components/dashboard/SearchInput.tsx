import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


type Props = {}

export default function SearchInput({ }: Props) {
    return (
        <form>
            <label className="sr-only">Search</label>
            <div className="relative w-64 hover:w-72 duration-300 ease-in-out">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <BsSearch className="w-3 h-3 text-gray-900"/>
                    <MdOutlineKeyboardArrowDown className="w-4 h-4 text-blue-600 " />
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border-[1px] border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 block w-full ps-10 px-2 py-1.5  dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-600 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:font-sm placeholder:text-xs" placeholder="Search in Customers (/)" required />
            </div>
        </form>
    )
}