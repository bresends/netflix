import {
	EMAIL_FROM,
	EMAIL_SERVER_HOST,
	EMAIL_SERVER_PASSWORD,
	EMAIL_SERVER_PORT,
	EMAIL_SERVER_USER,
	GITHUB_ID,
	GITHUB_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET
} from '$env/static/private';
import { db } from '$lib/server/db/db';
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { SvelteKitAuth } from '@auth/sveltekit';
import EmailProvider from '@auth/sveltekit/providers/email';
import GitHub from '@auth/sveltekit/providers/github';
import GoogleProvider from '@auth/sveltekit/providers/google';

export const handle = SvelteKitAuth({
	adapter: DrizzleAdapter(db),
	providers: [
		GitHub({
			clientId: GITHUB_ID,
			clientSecret: GITHUB_SECRET,
			allowDangerousEmailAccountLinking: true
		}),
		GoogleProvider({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			allowDangerousEmailAccountLinking: true
		}), 
		EmailProvider({
			server: {
			  host: EMAIL_SERVER_HOST,
			  port: EMAIL_SERVER_PORT,
			  auth: {
				user: EMAIL_SERVER_USER,
				pass: EMAIL_SERVER_PASSWORD
			  }
			},
			from: EMAIL_FROM
		  }),
	]
});
