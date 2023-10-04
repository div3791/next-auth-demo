'use client'
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { signIn } from "next-auth/react"
import { FormEvent } from "react"
import { AiFillGithub } from 'react-icons/ai'

const LoginPage = ({ searchParams }: { searchParams: { callbackUrl: string } }) => {

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: true,
            callbackUrl: searchParams.callbackUrl ?? '/'
        })
    }

    const handleGithubLogin = async (e: any) => {
        e.preventDefault();
        await signIn('github', {
            redirect: true,
            callbackUrl: searchParams.callbackUrl ?? '/'
        })
    }

    return (
        <main>
            <form onSubmit={handleLogin} className="border-[1px] w-fit mt-10 rounded-lg m-auto p-8 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold my-4">Login</h1>
                <span onClick={(e) => handleGithubLogin(e)} className="cursor-pointer bg-black text-white flex px-4 py-2 rounded-lg items-center justify-center gap-2">
                    <AiFillGithub />
                    <p>Sign In with Github</p>
                </span>
                <span className="my-4">
                    <p className="text-lg font-semibold">OR</p>
                </span>
                <Input placeholder="Username" name="email" type="email" />
                <Input placeholder="Password" name="password" type="password" />
                <Button type="submit">Login</Button>
            </form>
        </main>
    )
}

export default LoginPage
