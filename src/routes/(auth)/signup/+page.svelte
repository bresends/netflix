<script lang="ts">
	import { enhance } from '$app/forms';
	import GoogleIcon from '$lib/assets/google.svg';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { GithubIcon } from 'lucide-svelte';

	export let form;
</script>

<div class="mt-24 rounded bg-black/80 p-6 py-10 md:mt-0 md:max-w-sm md:px-14">
	<form method="POST" use:enhance>
		<h1 class="text-3xl font-semibold text-white">Crie sua conta</h1>
		<div class="mt-5 space-y-4">
			<Input type="email" placeholder="Email" name="email" class="inline-block w-full bg-[#333]" />
			<Input
				type="text"
				placeholder="Usuário"
				name="username"
				id="username"
				class="inline-block w-full bg-[#333]"
			/>
			<Input
				type="password"
				name="password"
				id="password"
				placeholder="Senha"
				class="inline-block w-full bg-[#333]"
			/>
			<Button type="submit" variant="destructive" class="w-full bg-[#e50914]">Criar</Button>
		</div>
	</form>

	<div class="mt-5 text-sm text-gray-500">
		Já tem uma conta? <a href="/login" class="text-white hover:underline">Entrar</a>
	</div>

	<div class="mt-6 flex w-full items-center justify-center gap-x-3">
		<Button variant="outline" size="icon">
			<GithubIcon class="h-5 w-5" />
		</Button>
		<Button variant="outline" size="icon">
			<img src={GoogleIcon} alt="Google Icon" class="h-7 w-7" />
		</Button>
	</div>
</div>

<pre>
	{JSON.stringify(form, null, 2)}
</pre>
