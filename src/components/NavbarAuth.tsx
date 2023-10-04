'use client'

import { signOut, useSession } from "next-auth/react"
import Button from "./ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

const NavbarAuth = () => {
    const router = useRouter();

    const { data: session } = useSession();

    return (
        <>
            {
                (session && session?.user) ?
                    <span className="flex space-x-10">
                        <Image className="rounded-full shadow-lg" src={session.user.image as string} alt="github" width={50} height={50} />
                        <Button onClick={(e) => signOut()}>Logout</Button>
                    </span> :
                    <span className="flex space-x-4">
                        <Button onClick={(e) => router.push('/login')}>Login</Button>
                    </span>
            }
        </>
    )
}

export default NavbarAuth
