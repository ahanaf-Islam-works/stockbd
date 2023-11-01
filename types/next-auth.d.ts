import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import { DefaultSession } from "next-auth";
type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    name: string;
    email: string;
    image: string | null;
    balance: number;
    role: boolean;
  }
}

export declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & {
      id: UserId;
      name: string;
      email: string;
      image: string;
      balance: number;
      role: boolean;
    };
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    id: UserId;
    name: string;
    email: string;
    image: string | null;
    balance: number;
    role: boolean;
  }
}
