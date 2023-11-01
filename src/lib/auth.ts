import GithubProvider from "next-auth/providers/github";
import prisma from "@/db";
import { compare } from "bcryptjs";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/db";
import "next-auth/jwt";
import { JWT } from "next-auth/jwt";

interface ExtendedUser extends User {
  balance: number;
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
          throw new Error("Please enter your email and password.");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !(await compare(credentials.password, user.password))) {
          throw new Error("Incorrect email or password.");
        }
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          balance: user.balance,
          role: user.admin,
          image: null,
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
          name: token.name,
          email: token.email,
          image: token.image,
        },
      };
    },

    jwt: async ({ token, user, trigger, session }) => {
      if (trigger === "update") {
        return {
          ...token,
          balance: session.user.balance as number,
        };
      }
      const dbUser = await db.user.findUnique({
        where: {
          email: token.email as string,
        },
      });

      if (user && dbUser) {
        return {
          ...token,
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          image: null,
          balance: dbUser.balance,
          role: dbUser.admin,
        } as JWT;
      }
      return token;
    },
  },
};
