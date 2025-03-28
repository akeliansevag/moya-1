<template>
	<!-- <Preloader /> -->
	<NuxtLoadingIndicator class="!opacity-100" />
	
	<HeaderAppHeader />
	<main class="mt-[var(--header-height)]">
		<NuxtPage />
	</main>
	<AppFooter />
</template>

<script setup>
	import { useCountry } from '~/composables/useCountry';

	const { detectCountry } = useCountry();

	onMounted(() => {
		detectCountry();  // Detect country on app load
	});
</script>
