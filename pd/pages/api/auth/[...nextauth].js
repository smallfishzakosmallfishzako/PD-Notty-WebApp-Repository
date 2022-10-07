import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks:{
        async jwt({token,account}){
            if(account){
                token.accesToken = account.access_token;
            }
            return token;
        },
        async session({session,token,user}){
            session.accesToken = token.accesToken;
            return session;
        }
    },
    secret: SECRET,
    debug:true
});