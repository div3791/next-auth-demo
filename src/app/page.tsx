import { getServerSession } from "next-auth"
import { options } from "./api/auth/[...nextauth]/auth-options"
import Image from "next/image";

export default async function Home() {

  const session = await getServerSession(options);

  return (
    <main className="flex flex-col p-10 justify-center items-center">
      <h1 className="text-3xl">Home Page</h1>
      {
        session ? <span className="flex flex-col justify-center items-center">
          <h1 className="text-lg font-semibold my-4">Hey, {session?.user?.name}</h1>
          {session.user?.image && <Image className="rounded-lg shadow-lg" src={session?.user?.image as string} alt="github" width={140} height={140} />}
        </span> : <></>
      }
    </main>
  )
}
