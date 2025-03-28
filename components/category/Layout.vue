<template>
    <component :is="categoryComponent" :categoryData="categoryData" :isModalVisible="isModalVisible" :onToggle="onToggle" />
</template>

<script setup>
    const props = defineProps({
        categoryData: Object,
        isModalVisible: Boolean,
        onToggle: Function
    });
    
    const CategoryLayoutPrimary = defineAsyncComponent(() => import('./LayoutPrimary.vue'))
    const CategoryLayoutSecondary = defineAsyncComponent(() => import('./LayoutSecondary.vue'))

    const categoryComponent = computed(() => 
        props.categoryData.layout === 'primary' ? CategoryLayoutPrimary : CategoryLayoutSecondary
    );
</script>