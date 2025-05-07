import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { type DefaultSession } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    sessionToken: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  callbacks: {
    // authorized: async ({ request, auth }) => {
    //   console.log(auth);
    //   console.log(request);
    //   return
    // },
    async session({ session }) {
      return session;
    },
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
});
