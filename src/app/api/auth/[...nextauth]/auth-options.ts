import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from 'next-auth/providers/github'

export const options: NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET as string,
    session: {
        strategy: 'jwt',
        maxAge: 4 * 60
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Username', type: 'email', placeholder: 'Email ID' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                try {
                    const user = { id: 1, name: 'Divyesh Shani', email: 'er.divyesh.shani@gmail.com', password: '123456' };
                    if (user) {
                        if (credentials?.email === user.email && credentials.password === user.password) {
                            return {
                                name: user.name,
                                id: user.id.toString(),
                            };
                        } else {
                            return null;
                        }
                    }
                    return null;
                } catch (error: any) {
                    console.log(error.message)
                    return null;
                }
            },
        }),
    ],
}