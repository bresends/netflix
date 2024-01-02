<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { signOut } from '@auth/sveltekit/client';
</script>

<div
	class="mt-24 flex flex-col justify-center rounded bg-black/80 p-6 py-10 md:mt-0 md:max-w-sm md:px-14"
>
	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<img src={$page.data.session.user.image} alt="avatar" class="w-24 rounded-full" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
		</span>
		<Button on:click={() => signOut()} class="button">Sign out</Button>
	{/if}
</div>
