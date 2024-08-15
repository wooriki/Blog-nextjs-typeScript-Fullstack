import { log } from "console";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv23liFEI12yX39ZjA03",
      clientSecret: "c4cc0e9069b01c1168dd7b5f5b5cbd3f8dd30ebc",
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      console.log("here!", session, token);

      session.user.name = `${session?.user?.name}_${token?.sub}`;
      return session;
    },
  },
  secret: "default_secret_key",
};

const nextAuth = NextAuth(authOptions);

export { nextAuth as GET, nextAuth as POST };
