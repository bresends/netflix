import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import GoogleProvider from '@auth/sveltekit/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import {
	GITHUB_ID,
	GITHUB_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET
} from '$env/static/private';
import { db } from '$lib/db.server';

export const handle = SvelteKitAuth({
	adapter: PrismaAdapter(db),
	providers: [
		GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		})
	]
});
