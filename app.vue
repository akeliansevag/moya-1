<template>
	<!-- <Preloader /> -->
	
	<div>
		<HeaderAppHeader />
		<main class="mt-[var(--header-height)]">
			<NuxtPage />
		</main>
		<AppFooter />
	</div>
</template>

<script setup>
	import { useCountry } from '~/composables/useCountry';

	const { detectCountry } = useCountry();

	onMounted(() => {
		detectCountry();  // Detect country on app load
	});
</script>
