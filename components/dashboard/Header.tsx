import { AiOutlineHistory } from "react-icons/ai";
import { PiPlus } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiBellSimpleLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import SearchInput from "./SearchInput";
import User from '../../assets/image/user1.png'
import Image from "next/image";

type Props = {}

export default function Header({ }: Props) {
  return (
    <div className='bg-gray-100 flex h-12 items-center justify-between px-4 py-4 shadow-md'>
      <div className="flex items-center gap-3">
        {/* Recent activities */}
        <button>
          <AiOutlineHistory className='cursor-pointer w-6 h-6 text-gray-700 font-light ' />
        </button>
        {/* search */}
        <SearchInput />
      </div>
      <div className="flex items-center gap-3">
        {/* Plus Icon */}
        <div className="pr-2 border-r border-gray-300">
          <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" className="p-1 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <PiPlus
              className="w-3 h-3"
            />
          </button>
        </div>
        <div className="flex space-x-3 border-r border-gray-300 px-2">
          {/* users */}
          <button>
            <HiOutlineUsers className="w-5 h-5 text-gray-700 font-light" />
          </button>
          <button>
            <PiBellSimpleLight className="w-5 h-5 text-gray-700 font-light" />
          </button>
          <button>
            <IoSettingsOutline className="w-5 h-5 text-gray-700 font-light" />
          </button> 
        </div>
        {/* profile  */}
        <div className="flex gap-4 text-sm">
          <button className="flex items-center">
            <span>Jordan Ogene</span>
            <MdOutlineKeyboardArrowDown className="w-3 h-3 text-gray-700 font-light" />
          </button>
          <button>
            <Image
              src={User}
              alt="profile"
              width={30}
              height={30}
              className="rounded-full border-gray-700 border"
            />
          </button>
          <button>
            <TfiLayoutGrid4Alt className="w-5 h-5 text-gray-700 font-light" />
          </button>
        </div>
      </div>
    </div>
  )
}