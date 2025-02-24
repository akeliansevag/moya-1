<template lang="">
    <footer class="text-[#A2A2A2] text-sm bg-black py-24">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                <div class="flex flex-col gap-8 lg:gap-16">
                    <NuxtLink :to="'/'">
                        <NuxtImg src="/images/logo.svg" alt="Logo" width="100" height="30" />
                    </NuxtLink>

                    <p>Moyaaaa is a leader in innovative wireless communication solutions. We are committed to pushing the boundaries of technology to deliver high-performance solutions to our clients.  </p>

                    <div class="flex gap-4">
                        <NuxtLink to="/about" class="flex flex-shrink-0 justify-center items-center size-10 bg-[#3F3F3F]/25 rounded-md">
                            <Icon name="fa6-brands:facebook-f" />
                        </NuxtLink>
                        <NuxtLink to="/contact" class="flex flex-shrink-0 justify-center items-center size-10 bg-[#3F3F3F]/25 rounded-md">
                            <Icon name="fa6-brands:linkedin-in" />
                        </NuxtLink>
                        <NuxtLink to="/contact" class="flex flex-shrink-0 justify-center items-center size-10 bg-[#3F3F3F]/25 rounded-md">
                            <Icon name="fa6-brands:youtube" />
                        </NuxtLink>
                    </div>
                </div>

                <div class="lg:mx-auto flex flex-col gap-8 lg:gap-16">
                    <h4 class="text-white font-bold underline underline-offset-[20px] decoration-primary">Useful Links</h4>
                    
                    <div class="flex flex-col gap-4">
                        <NuxtLink to="/">Home</NuxtLink>
                        <NuxtLink to="/solutions">Solutions</NuxtLink>
                        <NuxtLink to="/products">Products</NuxtLink>
                        <NuxtLink to="/about-us">About Us</NuxtLink>
                        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                    </div>
                </div>

                <div class="flex flex-col gap-8 lg:gap-16">
                    <h4 class="text-white font-bold underline underline-offset-[20px] decoration-primary">Get in Touch</h4>

                    <div class="flex items-center gap-4">
                        <div class="flex flex-shrink-0 justify-center items-center size-10 bg-primary rounded-md">
                            <Icon name="fa6-solid:location-dot" class="text-white" />
                        </div>
                        <p>1001, Building B, R&D Center, OFILM Headquarters, Fenghuang Street, Guangming District, Shenzhen, China</p>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="flex flex-shrink-0 justify-center items-center size-10 bg-primary rounded-md">
                            <Icon name="fa6-solid:envelope" class="text-white" />
                        </div>
                        <a href="mailto:evan.wu@montymobile.com">evan.wu@montymobile.com</a>
                    </div>
                </div>
            </div>

            <hr class="mb-12 mt-24 border-[#A2A2A2]" />

            <div class="flex justify-between items-center">
                <div class="flex gap-4">
                    <NuxtLink to="/privacy-policy" class="underline">Privacy Policy</NuxtLink>
                    <NuxtLink to="/terms-of-service" class="underline">Terms of Service</NuxtLink>
                    <NuxtLink to="/cookie-settings" class="underline">Cookie Settings</NuxtLink>
                </div>

                <p>© {{ new Date().getFullYear() }} Moya. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
  
</script>