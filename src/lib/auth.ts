import GithubProvider from "next-auth/providers/github";
import prisma from "@/db";
import { compare } from "bcryptjs";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/db";
import "next-auth/jwt";

// declare the module for token session
declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
      email: string;
      balance: number;
      role: boolean; //
    };
  }
}

export const authOptions: NextAuthOptions = {
  // Added type annotation
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
      async authorize(credentials) {
        // Removed type annotation for credentials parameter
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
          balance: user.balance,
          role: user.admin,
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
        return {
          ...token,
          id: dbUser.id,
          email: user.email,
          balance: dbUser.balance,
          role: dbUser.admin,
        };
      }
      return token;
    },
  },
};
