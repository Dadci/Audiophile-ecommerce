<template>
    <div class="bg-white p-12 rounded-lg w-[540px] flex flex-col items-center justify-start gap-8">
        <div class="flex flex-col items-start gap-6 w-full">
            <img :src="order" alt="Order Confirmation" class="" />
            <h1 class="text-3xl font-bold uppercase leading-tight">
                Thank You <br> for Your Order!
            </h1>
            <p class="text-gray-500">You will receive an email confirmation shortly.</p>
        </div>

        <div class="w-full flex items-stretch">
            <!-- Order Items Section -->
            <div class="bg-[#F1F1F1] p-6 flex-1 flex-col rounded-l-lg ">
                <!-- Show first item -->
                <div v-if="displayItems.length > 0" class="flex items-center justify-between  ">
                    <div class="flex items-center gap-4">
                        <img :src="getImagePath(displayItems[0].image.desktop)" :alt="displayItems[0].name"
                            class="w-12 h-12 object-cover rounded-lg" />
                        <div>
                            <h3 class="font-bold text-sm">{{ getShortName(displayItems[0].name) }}</h3>
                            <p class="text-gray-500 text-sm">$ {{ displayItems[0].price.toLocaleString() }}</p>
                        </div>
                    </div>
                    <span class="text-gray-500 font-bold">x{{ displayItems[0].quantity }}</span>
                </div>

                <!-- Show count of additional items if more than 1 -->
                <div v-if="displayItems.length > 1" class="border-t border-t-gray-300 pt-4">
                    <p class="text-gray-500 text-sm text-center font-medium">
                        and {{ displayItems.length - 1 }} other item(s)
                    </p>
                </div>
            </div>

            <!-- Grand Total Section -->
            <div class="bg-black flex flex-col items-start justify-center p-6 rounded-r-lg gap-2 text-white">
                <p class="text-gray-400 uppercase text-sm ">Grand Total</p>
                <p class="text-white font-bold text-lg">$ {{ grandTotal.toLocaleString() }}</p>
            </div>
        </div>

        <button @click="$emit('backToHome')"
            class="w-full bg-[#D87D4A] hover:bg-[#D87D4A]/90 text-white font-bold py-3 px-6 uppercase tracking-wider ">
            Back to Home
        </button>
    </div>
</template>

<script setup>
import order from '../assets/checkout/icon-order-confirmation.svg'

const props = defineProps({
    orderItems: {
        type: Array,
        required: true
    },
    grandTotal: {
        type: Number,
        required: true
    }
});

defineEmits(['close', 'backToHome']);

const displayItems = props.orderItems;

const getImagePath = (path) => {
    return path.replace("./", "/src/");
};

const getShortName = (name) => {
    if (name.includes('XX99 Mark II')) return 'XX99 MK II';
    if (name.includes('XX99 Mark I')) return 'XX99 MK I';
    if (name.includes('XX59')) return 'XX59';
    if (name.includes('ZX9')) return 'ZX9';
    if (name.includes('ZX7')) return 'ZX7';
    if (name.includes('YX1')) return 'YX1';
    return name;
};
</script>
