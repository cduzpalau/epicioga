import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@epicioga.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        
        // Mock authentication for testing
        // En producció això hauria de verificar un hash de password
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (user) {
          // Accepta qualsevol password en mode desenvolupament per provar
          return user as any;
        }
        
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt" as const
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    }
  },
  pages: {
    signIn: '/api/auth/signin',
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
