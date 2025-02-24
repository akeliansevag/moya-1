<template lang="">
    <header id="header" class="flex flex-col justify-center items-center h-[var(--header-height)] fixed top-0 left-0 w-full text-sm transition-transform duration-300 ease-in-out bg-black z-50" :class="{ '-translate-y-full': isScrolledDown, 'translate-y-0': isNavOpen }">
        <div class="container flex justify-between items-center">
            <!-- Logo -->
            <NuxtLink :to="'/'">
                <NuxtImg src="/images/logo.svg" alt="Logo" width="100" height="30" />
            </NuxtLink>

            <!-- Desktop Navigation -->
            <HeaderDesktopHeader :menuItems="menuItems" />

            <!-- Mobile Menu Toggle Icon -->
            <div id="nav-toggle" class="block lg:hidden rounded cursor-pointer" :class="{ toggled: isNavOpen }" dir="rtl" @click="toggleNav">
                <div class="line1 w-[20px] h-[3px] bg-white rounded-2xl transition-all duration-300 ease-in-out"></div>
                <div class="line2 my-1 w-3/4 h-[3px] bg-white rounded-2xl transition-all duration-300 ease-in-out"></div>
                <div class="line3 w-[20px] h-[3px] bg-white rounded-2xl transition-all duration-300 ease-in-out"></div>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <HeaderMobileHeader :menuItems="menuItems" v-model:isNavOpen="isNavOpen" />
    </header>
</template>

<script setup>
    const isOnTop = ref(true);
    const lastScrollPosition = ref(0);
    const isScrolledDown = ref(false);
    const isScrolledUp = ref(false);
    const scrollThreshold = 200;
    const isNavOpen = ref(false);

    const menuItems = ref([
        {
            title: "Solutions",
            clickable: false,
            links: [
                {
                    title: "Core Network",
                    subLinks: [
                        { title: "MNO Solution", path: "solutions/core-network/mno-solution" },
                        { title: "FWA Solution", path: "solutions/core-network/fwa-solution" },
                        { title: "Enterprise Solution", path: "solutions/core-network/enterprise-solution" }
                    ]
                },
                {
                    title: "RAN",
                    subLinks: [
                        { title: "Dense Area Solution", path: "solutions/ran/dense-area-solution" },
                        { title: "Rural Area Solution", path: "solutions/ran/rural-area-solution" },
                        { title: "Indoor Solution", path: "solutions/ran/indoor-solution" }
                    ]
                },
                {
                    title: "Repeater",
                    subLinks: [
                        { title: "Fiber Solution", path: "solutions/repeater/fiber-solution" },
                        { title: "Wireless Solution", path: "solutions/repeater/wireless-solution" },
                        { title: "ICS Wireless Solution", path: "solutions/repeater/ics-wireless-solution" }
                    ]
                }
            ]
        },
        {
            title: "Products",
            clickable: false,
            links: [
                {
                    title: "Network",
                    subLinks: [
                        { title: "Moya EPC", path: "products/core-network/mno-solution" },
                        { title: "Moya IMS", path: "products/core-network/fwa-solution" },
                    ]
                },
                {
                    title: "RAN Product",
                    subLinks: [
                        { title: "BBU - RRU - pHUB", path: "products/ran-products/bbu-rru-phub" },
                        { title: "Integrated eNB", path: "products/ran-products/integrated-enb" },
                        { title: "Femtocell", path: "products/ran-products/femtocell" }
                    ]
                },
                {
                    title: "Repeater",
                    subLinks: [
                        { title: "Fiber Repeater", path: "products/repeater/fiber-solution" },
                        { title: "Wireless Repeater", path: "products/repeater/wireless-Repeater" },
                        { title: "ICS Wireless Repeater", path: "products/repeater/ics-wireless-Repeater" }
                    ]
                },
                {
                    title: "Antenna",
                    subLinks: [
                        { title: "Omni Antenna", path: "products/repeater/omni-antenna" },
                        { title: "Cluster Antenna", path: "products/repeater/cluster-antenna" },
                        { title: "Panel Antenna", path: "products/repeater/panel-antenna" }
                    ]
                }
            ]
        },
        {
            title: "About Us",
            clickable: true,
            path: "about-us"
        },
        {
            title: "Contact Us",
            clickable: true,
            path: "contact-us"
        }
    ]);

    const toggleNav = () => {
        isNavOpen.value = !isNavOpen.value;
        document.body.classList.toggle("overflow-y-hidden", isNavOpen.value);
    };

    const checkScrollPosition = () => {
        // Check if the user is at the top of the page on mount
        isOnTop.value = window.scrollY === 0;
    };
    
    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        // Determine the scroll direction
        const scrollDirection = currentScrollPosition > lastScrollPosition.value ? 'down' : 'up';

        // Set the value for isScrolledUp if the user is scrolling up
        isScrolledUp.value = scrollDirection === 'up';

        // Check if the user has scrolled down more than the threshold
        isScrolledDown.value = scrollDirection === 'down' && currentScrollPosition > scrollThreshold;

        // Check if the user is at the top of the page
        isOnTop.value = currentScrollPosition === 0;

        // Update the last scroll position
        lastScrollPosition.value = currentScrollPosition;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        checkScrollPosition();
    });
</script>