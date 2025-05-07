import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    // authorized: async ({ request, auth }) => {
    //   console.log(auth);
    //   console.log(request);
    //   return
    // },
    async session({ session, token, user }) {
      console.log(session);
      console.log(token);
      console.log(user);

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
