import Link from "next/link"
import NavbarAuth from "./NavbarAuth"

const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center px-8 py-4 bg-blue-100">
                <ul className="flex gap-6">
                    <li><Link className="cursor-pointer hover:text-blue-500" href={'/'}>Home</Link></li>
                    <li><Link className="cursor-pointer hover:text-blue-500" href={'/about'}>About</Link></li>
                    <li><Link className="cursor-pointer hover:text-blue-500" href={'/dashboard'}>Dashboard</Link></li>
                    <li><Link className="cursor-pointer hover:text-blue-500" href={'/profile'}>Profile</Link></li>
                </ul>
                <NavbarAuth />
            </nav>
        </header>
    )
}

export default Navbar
