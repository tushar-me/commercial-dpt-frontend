<script setup>
    import Container from "@/components/Container.vue";
</script>
<template>
    <section class="border-b border-gray-300">
        <Container class="py-4">
            <div class="flex justify-bewteen items-center">
                <div class="w-1/2">
                    <div class="flex items-center">
                        <div>
                            <img class="w-76 h-10 my-1 pr-16" src="@/assets/images/logo.png" alt="">
                        </div>
                        <div>
                            <ul class="flex gap-6">
                                <li class="flex gap-1 items-center text-lg font-medium hover:text-primary ease-in-out duration-500">
                                    Product
                                    <Icon name="material-symbols-light:keyboard-arrow-down" class="text-3xl text-gray-500" />
                                </li>
                                <li class="flex items-center text-lg font-medium hover:text-primary ease-in-out duration-500">
                                    Explore
                                </li>
                                <li class="flex items-center text-lg font-medium hover:text-primary ease-in-out duration-500">
                                    Customer
                                </li>
                                <li class="flex items-center gap-2 hover:text-primary ease-in-out duration-500">
                                    <Icon name="tabler:target-arrow" class="text-5xl " />
                                    <span class="text-xs">Request For Quatations</span>
                                </li>
                                <li class="flex items-center relative group">
                                    <Icon name="tabler:dots" class="text-4xl hover:text-primary ease-in-out duration-500" />
                                    <div class="absolute -z-50 opacity-0 group-hover:opacity-100 top-20 group-hover:top-10 transition-all ease-in-out duration-500 left-0 right-0  group-hover:z-50 ">
                                        <ul class="flex flex-col gap-3 text-lg font-normal p-8 border shadow-lg w-52 bg-white rounded">
                                            <li>Blog</li>
                                            <li>Community</li>
                                            <li class="border-b "></li>
                                            <li>Find a Partner</li>
                                            <li>Support</li>
                                            <li>Contact us</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="flex justify-end ">
                        <ul class="flex gap-5 items-center">
                            <li class="">
                                <RouterLink to="/" class="flex gap-1 items-center">
                                    <span class="text-lg">Search</span>
                                    <Icon name="solar:magnifer-linear" class="text-xl " />
                                </RouterLink>
                               </li>
                            <li>
                                <RouterLink to="/" class="relative">
                                    <span class="absolute -top-1 -right-1 flex h-3 w-3">
                                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                    </span>
                                    <Icon name="ant-design:notification-outlined" class="text-xl " />
                                </RouterLink>
                            </li>
                            <li class="flex gap-1 items-center">
                                <Icon name="hugeicons:globe-02" class="text-xl " />
                                <span class="text-lg">EN</span>
                            </li>
                            <li>
                                <RouterLink to="/" class="text-primary text-lg font-semibold">
                                    Sign In
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/" class="text-primary text-lg font-semibold border rounded border-primary px-4 py-1 hover:text-white hover:bg-primary ease-in-out duration-500">
                                    Sign Up
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </section>

    <section>
        <div class="flex ">
            <div class=" px-5">
                <div class="flex items-center justify-center my-5 py-2 px-7 gap-2 border rounded-full hover:bg-primary/15 ease-in-out duration-500">
                    <Icon name="mi:filter" class="text-2xl text-gray-600" />
                    <p class="text-xl font-semibold">Filter</p>
                </div>
            </div>
            <div class="w-5/6">
                <div class="relative ">
                    <Icon name="heroicons:magnifying-glass" class="absolute text-2xl top-8 left-8 text-gray-700" />
                    <div>
                        <input type="search" class="border pl-20 rounded-full bg-primary/5 focus:outline-none my-5 py-3 px-7 w-full"  />
                    </div>
                    <div class="flex gap-2 items-center px-6 py-1 absolute top-7 right-3 border bg-white rounded-full">
                        <Icon name="clarity:picture-line" class="text-gray-500 text-xl" />
                        <p class="font-medium">Search By Image</p>
                    </div>
                    
                </div>
            </div>
            <div class=" px-5">
                <div class="relative flex items-center justify-center my-5 py-2 px-7 gap-2 border rounded-full hover:border-gray-700 ease-in-out duration-500">
                    <p class="text-xl font-semibold">Recommended</p>
                    <Icon name="material-symbols:arrow-drop-down" />
                    <span class="absolute -top-3 left-8 text-sm font-semibold text-gray-500 px-2 bg-white">Sort</span>
                </div>
            </div>
        </div>
    </section>
</template>