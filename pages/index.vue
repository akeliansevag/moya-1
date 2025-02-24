<template>
    <section class="h-[calc(100vh-var(--header-height))] bg-black text-white flex items-center relative">
        <div class="absolute bottom-0 left-0 w-full z-[1]">
            <NuxtImg class="mix-blend-color-dodge w-full" src="/images/main-banner.png" alt="" width="1444" height="309" />
        </div>
        <div class="absolute bottom-0 right-0 w-full lg:w-2/3 z-[2]">
            <NuxtImg class="w-full" src="/images/antenna-final1.gif" alt="" width="1444" height="309" />
        </div>
        <div class="container">
            <div class="relative flex flex-col gap-8 lg:w-2/5 z-[3] max-lg:-mt-48">
                <h1 class="text-5xl font-bold">Connecting Your <span class="text-primary">World Everywhere</span></h1>
                <p class="text-sm text-[#ACA8A8]">Stay connected effortlessly with our reliable telecom solutions, ensuring seamless communication anytime, anywhere. Experience high-speed networks, crystal-clear calls, and innovative services.</p>
                
                <div class="flex gap-4">
                    <NuxtLink to="/">
                        <button class="py-2 px-6 text-sm text-black bg-white hover:text-white hover:bg-primary rounded-full select-none transition-all duration-300 ease-in-out">Explore</button>
                    </NuxtLink>

                    <NuxtLink to="/contact-us">
                        <button class="py-2 px-6 text-sm text-white bg-primary hover:text-black hover:bg-white rounded-full select-none transition-all duration-300 ease-in-out">Contact Us</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>

    <section class="py-12 bg-[#F8F8F9]">
        <div class="container">
            <h2 class="text-center text-xl font-semibold">Trusted by Top Companies Worlwide</h2>
        </div>

        <div class="marquee overflow-hidden">
            <div class="wrapper grid grid-flow-col auto-cols-[10rem] lg:auto-cols-[15rem] justify-items-center items-center mt-10 lg:my-10 animate-[marquee_20s_linear_infinite] lg:animate-[marqueelg_20s_linear_infinite]">
                <template v-for="(marquee, index) in duplicatedMarqueeList" :key="index">
                    <a :href="marquee.link" target="_blank">
                        <img loading="lazy" class="marquee-item w-2/3" :src="`images/${marquee.image}.webp`" :alt="marquee.alt" :width="marquee.width" :height="marquee.height" data-aos="fade-up" :data-aos-delay="(index + 1) * 100"/>
                    </a>
                </template>
            </div>
        </div>
    </section>
    
    <section class="my-12 py-12">
        <div class="container">
            <div class="flex flex-col gap-4">
                <h2 class="text-5xl font-semibold">Moya's Solutions</h2>
                <h3 class="text-2xl font-semibold">Your Trusted Telecom Partner</h3>
            </div>

            <swiper-container 
                :slides-per-view="1.2" 
                :speed="1000"
                :space-between="25"
                :grabCursor="true"
                :scrollbar="true"
                class="mt-14"
            >
                <!-- :centered-slides="true" -->
                <swiper-slide v-for="(solution, index) in solutions" :key="index">
                    <NuxtLink to="/solutions" :class="`group block relative py-12 px-4 lg:px-8 rounded-2xl aspect-[3/4] lg:aspect-video bg-gradient-to-b from-[#000000] from-40% to-[${solution.color}] to-100%`">
                        <div class="absolute bottom-0 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:right-24 w-3/5 lg:w-2/5">
                            <NuxtImg :src="`images/${solution.image}.png`" :alt="solution.title" :width="solution.width" :height="solution.height" />
                        </div>
                        <div class="flex max-lg:flex-col lg:justify-between lg:items-end gap-4 h-full text-white">
                            <h3 class="text-4xl font-semibold">{{ solution.title }}</h3>
                            <div class="flex lg:justify-between items-center gap-2 text-base">
                                <button class="transition-all duration-300 ease-in-out">Learn More</button>
                                <Icon name="fa6-solid:angle-right" class="transition duration-300 ease-in-out group-hover:translate-x-1" />
                            </div>
                        </div>
                    </NuxtLink>
                </swiper-slide>
            </swiper-container>
        </div>
    </section>

    <section class="mt-12 py-24 bg-[#F8F8F9]">
        <div class="container">
            <div class="flex flex-col gap-4">
                <h2 class="text-5xl font-semibold">Moya's Solutions</h2>
                <h3 class="text-2xl font-semibold">Your Trusted Telecom Partner</h3>
            </div>

            <swiper-container 
                :slides-per-view="1.2" 
                :speed="1000"
                :loop="true"
                :autoplay="{ delay: 5000 }"
                :space-between="25"
                :grabCursor="true"
                :breakpoints="{
                    1024: {
                        slidesPerView:3.2 
                    },
                    640: {
                        slidesPerView:2.2 
                    }
                }"
                class="mt-14"
            >
                <!-- :centered-slides="true" -->
                <swiper-slide v-for="(value, index) in values" :key="index" class="flex flex-col gap-8 h-auto p-4 rounded-2xl bg-white">
                    <NuxtImg :src="`images/icons/${value.icon}.svg`" :alt="value.title" width="42" height="42" />
                    <h3 class="text-2xl font-semibold">{{ value.title }}</h3>
                    <p class="text-[#ACA8A8]">{{ value.description }}</p>
                </swiper-slide>
            </swiper-container>  
        </div>
    </section>

    <!-- <section class="py-56 text-white bg-gradient-to-b from-[#F8F8F9] from-50% to-white to-50%">
        <div class="container">
            <div class="relative flex lg:justify-end items-center py-12 lg:px-8 px-4 bg-primary rounded-2xl aspect-square lg:aspect-[22/9]">
                <div class="absolute bottom-0 right-0 lg:left-24 w-1/3 lg:w-1/2">
                    <NuxtImg src="/images/have-questions-talk-to-us.png" alt="" width="" height="" />
                </div>

                <div class="absolute top-0 left-0 w-full h-full">
                    <NuxtImg class="w-full h-full object-cover mix-blend-color-burn" src="/images/have-questions-talk-to-us-bg.png" alt="" width="" height="" />
                </div>

                <div class="flex flex-col gap-4 lg:-translate-x-32">
                    <h2 class="text-5xl font-semibold">Have Questions?<br />Talk To Us</h2>
                    <p class="text-sm">Get in touch with us at Moya easily!<br />Whether you have questions or need assistance.</p>
                    <NuxtLink to="/">
                        <button class="py-2 px-6 text-sm text-black bg-white hover:text-white hover:bg-primary rounded-full select-none transition-all duration-300 ease-in-out">Get in Touch</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section> -->

    <section class="py-24 text-white bg-gradient-to-b from-[#F8F8F9] from-50% to-white to-50%">
        <div class="container">
            <div class="relative flex lg:justify-end lg:items-center py-12 px-4 lg:px-8 bg-primary rounded-2xl aspect-[3/4] lg:aspect-[24/9]">
                <div class="absolute bottom-0 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:left-24 w-2/5">
                    <NuxtImg src="/images/have-questions-talk-to-us1.png" alt="" width="" height="" />
                </div>
                
                <div class="absolute top-0 left-0 w-full h-full">
                    <NuxtImg class="w-full h-full object-cover mix-blend-color-burn" src="/images/have-questions-talk-to-us-bg.png" alt="" width="" height="" />
                </div>

                <div class="flex flex-col gap-4 max-lg:w-full lg:-translate-x-32">
                    <h2 class="text-5xl font-semibold">Have Questions?<br />Talk To Us</h2>
                    <p class="text-sm">Get in touch with us at Moya easily!<br />Whether you have questions or need assistance.</p>
                    <NuxtLink to="/">
                        <button class="py-2 px-6 text-sm text-black bg-white hover:text-white hover:bg-primary rounded-full select-none transition-all duration-300 ease-in-out">Get in Touch</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: 'Hompepage',
        description: '',

        ogTitle: 'Hompepage',
        ogDescription: '',
        ogImage: '',

        twitterTitle: 'Hompepage',
        twitterDescription: '',
        twitterCard: 'summary_large_image',
    })

    const marqueeList = [
        { image: "mymonty", alt: "MyMonty", width: "174", height: "35", link: "https://mymonty.com" },
        { image: "comium", alt: "Comium", width: "154", height: "38", link: "https://comium.gm" },
        { image: "montypay", alt: "MontyPay", width: "183", height: "33", link: "https://montypay.com" },
        { image: "monty-mobile", alt: "Monty Mobile", width: "154", height: "48", link: "https://montymobile.com" },
        { image: "monty-capital", alt: "Monty Capital", width: "225", height: "35", link: "https://montycapital.com" },
    ];

    const duplicatedMarqueeList = computed(() => [...marqueeList, ...marqueeList]);

    const solutions = [
        {  
            title: "Core Network", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut scelerisque, nisl sed lacinia fringilla, mi diam.",
            link: "",
            image: "core-network", 
            width: "", 
            height: "", 
            color: "#2B6FF6", 
            // background: linear-gradient(180deg, rgba(0,0,0,1) 47%, rgba(43,111,246,1) 100%);
        },
        {  
            title: "RAN", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut scelerisque, nisl sed lacinia fringilla, mi diam.",
            link: "",
            image: "ran", 
            width: "", 
            height: "", 
            color: "#43516D", 
        },
        {  
            title: "Repeater", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut scelerisque, nisl sed lacinia fringilla, mi diam.",
            link: "",
            image: "repeater", 
            width: "", 
            height: "", 
            color: "#323D86", 
        },
    ]

    const values = [
        {
            title: "Carrier Grade Guarantee",
            description: "High-quality, reliable, and robust standards provided by Moya to ensure services meet enterprise-level expectations.",
            icon: "carrier-grade-guarantee",
        },
        {
            title: "End to End Solution",
            description: "Comprehensive service that addresses all aspects of a customer's need, from start to finish and ensuring seamless integration, performance, and support.",
            icon: "end-to-end-solution",
        },
        {
            title: "Fiel Proven Product",
            description: "Comprehensive service that addresses all aspects of a customer's need, from start to finish and ensuring seamless integration, performance, and support.",
            icon: "fiel-proven-product",
        },
        {
            title: "Save Capex & Opex",
            description: "Frees up resources for innovation and business growth. Improves ROI by reducing unnecessary expenses. Enhances competitive advantage by optimizing cost-efficiency.",
            icon: "save-copex-and-opex",
        },
    ]
</script>

<style lang="sass">
    swiper-container::part(scrollbar) 
        position: relative
        height: 2px
        background-color: #2B6FF622
        margin-top: 100px
</style>