import GithubProvider from "next-auth/providers/github";
import prisma from "@/db";
import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/db";
import "next-auth/jwt";

// declare the module for token session
declare module NextAuthOptions {
  interface User {
    id: number;
    email: string;
    balance: number;
    role: string;
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials: Record<"email" | "password", string>) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !(await compare(credentials.password, user.password))) {
          return null;
        }
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          randomKey: "Hey cool",
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          balance: token.balance,
          role: token.role,
        },
      };
    },
    jwt: async ({ token, user }) => {
      const dbUser = await db.user.findUnique({
        where: {
          email: token.email as string,
        },
      });
      if (user && dbUser) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          email: u.email,
          balance: dbUser.admin,
          role: dbUser.admin,
        };
      }
      return token;
    },
  },
};
