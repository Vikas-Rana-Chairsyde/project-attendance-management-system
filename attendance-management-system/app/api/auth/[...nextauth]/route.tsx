import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@/app/generated/prisma";
// import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await prisma.users.findUnique({
          where: { email: credentials.email },
        });
        
        // const user = {
        //   id: 1,
        //   email: "abc@example.com",
        //   name: "Aisha",
        //   password: "abc@1234567", 
        // };

        if (!user) return null;


        const isValid = credentials.password === user.password;

        if (!isValid) return null;

        return {
          id: String(user.id),
          name: user.name,
          email: user.email,
        };
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };


