<script setup>
    import AppLayout from "@/components/Layouts/AppLayout.vue";
    import Container from "@/components/Container.vue";
    import { ref } from 'vue';
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();
   
    const categories = [
        {
            id: 1,
            name: 'Electronices'
        },
        {
            id: 2,
            name: 'Phone'
        },
        {
            id: 3,
            name: 'Laptop'
        },
        {
            id: 4,
            name: 'Telivison'
        }
    ]
</script>
<template>
    <AppLayout>
        <section class="bg-primary/10">
            <Container>
                <div class="flex py-6 gap-6 ">
                    <div class="w-4/5 h-auto mx-auto">
                        <div class="bg-white rounded-lg">
                            <h2 class="text-xl font-semibold p-5">Request for Quotations- RFQ</h2>
                            <div class="flex items-center ">
                                <div class="bg-primary/10 rounded-lg m-5 w-5/6">
                                    <ul class="flex gap-4 px-5">
                                        <li class="flex items-center gap-2 py-2">
                                            <Icon name="fluent:number-circle-1-24-regular" class="text-3xl" />
                                            <span class=" max-w-72">
                                                Submit a RFQ in just 1 minute.
                                            </span>
                                        </li>
                                        <li class="flex items-center gap-2 py-2">
                                            <Icon name="iconamoon:number-2-circle-light" class="text-3xl" />
                                            <span class=" max-w-72">
                                                Get multiple quotations from verified suppliers.
                                            </span>
                                        </li>
                                        <li class="flex items-center gap-2 py-2">
                                            <Icon name="iconamoon:number-3-circle-light" class="text-3xl" />
                                            <span class=" max-w-60">
                                                Compare and choose the best quotation!
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <RouterLink to="/" class="text-blue-500 ">Learn More</RouterLink>
                            </div>
                            <div class="px-10 py-7">
                                <div class="w-1/2">
                                    <label for="" class="text-lg font-normal">Product Name <span class="text-red-500">*</span></label>
                                    <input type="text" class="w-full rounded pl-2 border  py-2 my-3  focus:outline-primary border-gray-300 placeholder:text-base" placeholder="Enter a Specific Product Name, e.g.">
                                </div>
                                <div class="w-1/2">
                                    <label for="" class="text-lg font-normal">Product Category</label>
                                    <Select
                                            v-if="categories"
                                            label="name"
                                            class="w-full rounded pl-2 py-2 my-3  focus:outline-primary border-gray-300 placeholder:text-base"
                                            :options="categories"
                                            placeholder="Select the closest matching product Category"
                                        >
                                        </Select> 
                                </div>
                                <div class="w-1/2">
                                    <label for="" class="text-lg font-normal">About Your Product<span class="text-red-500">*</span></label>
                                    <textarea type="text" class="w-full h-44 rounded pl-2 border py-2 my-3  focus:outline-primary border-gray-300 placeholder:text-base" 
                                    placeholder="Please indicate your detailed requirements to ensure fast and efficient responses from suppliers"></textarea>
                                </div>
                                <div class="w-1/3">
                                    <label for="" class="text-lg font-normal">Sourcing Type</label>
                                    <Select
                                            v-if="categories"
                                            label="name"
                                            class="w-full rounded pl-2 py-2 my-3  focus:outline-primary border-gray-300 placeholder:text-base"
                                            :options="categories"
                                            placeholder="Select One"
                                        >
                                    </Select> 
                                </div>
                                <div class="flex -mx-5">
                                    <div class="w-1/2 px-5">
                                        <label for="" class="text-lg font-normal">Estimated Order Quantity<span class="text-red-500">*</span></label>
                                        <div class="flex">
                                            <div class="w-1/2">
                                                <input type="text" class="w-full rounded pl-2 border py-2 my-3  focus:outline-primary border-gray-300 placeholder:text-base" placeholder="e.g. 100">
                                            </div>
                                            <div class="w-1/2">
                                                <Select
                                                v-if="categories"
                                                label="name"
                                                class="w-full rounded pl-2 my-3  focus:outline-primary border-gray-300 placeholder:text-base"
                                                :options="categories"
                                                placeholder="Units"
                                                >
                                                </Select> 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-1/2 px-5">
                                        <label for="" class="text-lg font-normal">Preferred Unit Price</label>
                                        <div class="flex gap-3">
                                            <div class="w-1/2">
                                                <Select
                                                v-if="categories"
                                                label="name"
                                                class="w-full rounded pl-2  my-3  focus:outline-primary border-gray-300 placeholder:text-base"
                                                :options="categories"
                                                placeholder="USD"
                                                >
                                                </Select> 
                                            </div>
                                        
                                            <div class="w-1/2">
                                                <input type="text" class="w-full rounded pl-2 border py-2 my-3  focus:outline-primary border-gray-300 placeholder:text-base" placeholder="e.g. 50">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-1/4">
                                    <label for="" class="text-lg font-normal">Valid To<span class="text-red-500">*</span></label>
                                    <VueDatePicker v-model="date" class="w-full rounded pl-2  py-2 my-3  focus:outline-primary border-gray-300"></VueDatePicker>
                                </div>
                                <div class="w-1/2">
                                    <label for="" class="text-lg font-normal">Email Address<span class="text-red-500">*</span></label>
                                    <input type="email" class="w-full rounded pl-2 border py-2 my-3  focus:outline-primary border-gray-300 placeholder:text-base" placeholder="Enter a Specific Product Name, e.g.">
                                </div>
                                <div class="flex items-center">
                                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-primary bg-primary border-primary rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-primary focus:ring-2 dark:bg-primary dark:border-primary">
                                    <label for="link-checkbox" class="ms-2 text-sm font-normal my-3 text-gray-600 dark:text-gray-300">I'd like to send this RFQ to more suppliers, if I have not recived 20 quotations within the next 48 hours.</label>
                                </div>
                                <button class="bg-primary text-white text-xl my-3 font-semibold px-7 py-2 rounded">Submit</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </section>
    </AppLayout>
</template>