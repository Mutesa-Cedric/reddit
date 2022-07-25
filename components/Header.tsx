import Image from "next/image"
import { ChevronDownIcon, HomeIcon, SearchIcon, MenuIcon } from '@heroicons/react/solid'
import {
    BellIcon,
    ChatIcon,
    GlobeIcon,
    PlusIcon,
    SparklesIcon,
    SpeakerphoneIcon,
    VideoCameraIcon,

} from '@heroicons/react/outline'
import Link from "next/link"
import { signIn } from "next-auth/react"
function Header() {
    return (
        <div className="flex sticky top-0 z-50 bg-white px-4 py-2 shadow-sm">
            <div className="relative w-20 h-10 flex-shrink-0 cursor-pointer">
                <Image src={'/images/logo.webp'} layout="fill" objectFit="contain" />
            </div>
            <div className=" flex items-center mx-7 xl:min-w-[300px]">
                <HomeIcon className="h-5 w-5" />
                <p className="flex-1 ml-2 hidden lg:inline">home</p>
                <ChevronDownIcon className="h-5 w-5" />
            </div>

            {/* search */}
            <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
                <SearchIcon className="h-6 w-6 text-gray-400" />
                <input type="text" placeholder="Search Reddit" className="flex-1 bg-transparent outline-none" />
                <button type="submit" hidden ></button>
            </form>
            <div className="lg:flex text-gray-500 space-x-2 mx-5 hidden">
                <SparklesIcon className="icon" />
                <GlobeIcon className="icon" />
                <VideoCameraIcon className="icon" />
                <hr className="h-10 border border-gray-100" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <PlusIcon className="icon" />
                <SpeakerphoneIcon className="icon" />
            </div>
            <div className="flex lg:hidden items-center cursor-pointer ml-5">
                <MenuIcon className="icon" />
            </div>

            {/* signin /signout */}
            <div onClick={()=>signIn()} className="hidden lg:flex border border-gray-100 items-center cursor-pointer space-x-2 p-2">
                <div className="relative h-5 w-5 flex-shrink-0">
                    <Image objectFit="contain" src={'https://logoeps.com/wp-content/uploads/2014/09/52053-reddit-logo-icon-vector-icon-vector-eps.png'} layout="fill" />
                </div>
                <p className="text-gray-400">Sign In</p>
            </div>
        </div>
    )
}

export default Header