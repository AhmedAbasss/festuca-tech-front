import { AuthOptions, User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import axios, { AxiosError } from 'axios'
import { BASE_URL, MAX_AGE, SECRET } from "@/src/config/constant";
const maxAge = Number(  60 * 60 * 24)
const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge
    },
    secret: SECRET || "secret",
    pages: {
        signIn: '/signIn',
        
    },
    debug: true,
    logger: {
        error(code, metadata) {
            console.error(code, metadata);
        },
        debug(code, metadata) {
            console.debug(code, metadata);
        },
        warn(code) {
            console.warn(code);
        },
    },
    callbacks: {
        jwt: async ({ token, user, trigger, session }) => {
            if (user) {
                token.user = user;
            }
            if (trigger === 'update') {
                token.user = session.info;
            }
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user as User;
            return { ...session };
        },
    },
    providers: [
        CredentialsProvider({
            credentials: {
                payload: {},
            },
            async authorize(credentials: any): Promise<User | null> {
                try {
                    const { payload } = credentials;
                    if (!payload) {
                        throw new Error('No credentials provided');
                    }

                    const response = await axios.post(`${BASE_URL}Security/ShopperSession/Login`, JSON.parse(payload));
                    if (response.status !== 200) {
                        throw new Error('Login Failed');
                    }
                    const data = response.data as User;

                    if (!data) {
                        throw new Error('Login Failed');
                    }
                    return data;
                } catch (error) {
                    const err = error as AxiosError 
                    // return null
                    if (err.response?.data) {
                        throw new Error(`  ${JSON.stringify(err.response?.data)}`);
                    }
                    else {
                        throw new Error(` ${error}`);
                    }
                }
            },
        }),
    ],
}
export default authOptions;

