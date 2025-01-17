import { DefaultSession } from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: User;
    }

    export interface User {
        shopperId: number,
        token: string,
        refreshToken: string,
        firebaseToken: string
        createAt: string
        expiryAt: string
        tokenExpiryAt: string

    }
    interface JWT {
        user: User & DefaultSession['user'];
    }
}