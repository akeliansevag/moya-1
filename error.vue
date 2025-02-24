<template lang="">
</template>

<script setup lang="ts">
	import type { NuxtError } from '#app'

	const props = defineProps({
		error: Object as () => NuxtError
	})

	useServerSeoMeta({
	title: () => `Error: ${props.error.statusCode || 'Unknown'}`,
	description: () => `Error: ${props.error.message || 'Message'}`,

	ogTitle: () => `Error: ${props.error.statusCode || 'Unknown'}`,
	ogDescription: () => `Error: ${props.error.message || 'Message'}`,

	twitterTitle: () => `Error: ${props.error.statusCode || 'Unknown'}`,
	twitterDescription: () => `Error: ${props.error.message || 'Message'}`,
})


	// const handleError = () => clearError({ redirect: '/' })

	useHead({
		bodyAttrs: {
			class: "w-screen h-screen bg-black"
		}
	})
</script>

<style lang="sass" scoped>
	.animated-path
		fill: white
		stroke: none
		stroke-width: 2
		animation: fillStrokeToggle 2s infinite

	@keyframes fillStrokeToggle
		0%, 50%
			fill: white
			stroke: none

		0%, 100%
			fill: none
			stroke: white
</style>