<script lang="ts">
	import background from '$lib/assets/login_background.jpg';
	import logo from '$lib/assets/netflix_logo.svg';
</script>

<div
	class="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent"
>
	<img
		src={background}
		alt="the background of the site"
		class="-z-10 hidden brightness-50 sm:absolute sm:flex sm:h-full sm:w-full sm:bg-cover sm:object-cover"
	/>
	<img src={logo} alt="Netflix logo" class="absolute left-4 top-4 w-32 md:left-10 md:top-6" />
	<slot />
</div>
