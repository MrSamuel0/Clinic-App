import { ReactNode } from "react";
import Link from "next/link";

type MainNavbarProps = {
    children?: ReactNode
}

export default function MainNavbar({ children }: MainNavbarProps) {
    return(
        <nav className="w-full bg-gray-900 border-b border-gray-800 px-6 py-4">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6">
                    <Link href="./" className="text-white font-semibold hover:text-blue-400 transition-colors">
                        Home
                    </Link>
                    {children}
                </div>
                <div>
                    <Link href="/user/profile" className="text-gray-300 hover:text-white transition-colors">
                        Profile
                    </Link>
                </div>
            </div>
        </nav>
    )
}