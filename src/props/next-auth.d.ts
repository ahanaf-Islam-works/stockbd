import type { Session, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';


declare module 'next-auth' {
    interface Session {
        user: {
        id: UserId;
        name: string;
        email: string;
        image: string;
        balance: number;
        role: boolean;
        };
    }
  }

declare module 'next-auth/jwt' {
    interface JWT {
        id: UserId;
        name: string;
        email: string;
        image: string | null;
        balance: number;
        role: boolean;
    }
}
