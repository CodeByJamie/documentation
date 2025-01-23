import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

const handler = NextAuth({
	providers: [
		DiscordProvider({
			clientId: process.env.CLIENT_ID as string,
			clientSecret: process.env.CLIENT_SECRET as string,
		}),
	],

	callbacks: {
		async signIn({ user, account }: any) {
			if (!account || !account.access_token) {
				console.error('No account or access token found');
				return false;
			}
			
			return true;
		},
		async redirect({ url, baseUrl }: any) {
			return `${baseUrl}/dashboard`
		},
		async session({ session, token }: any) {
			session.user.id = token.sub as string;
			return session;
		},
		async jwt({ token, user }: any) {
			return token;
		},
	},
});

export { handler as GET, handler as POST }