<template>
    <div class="flex items-center justify-between">
        <div class="flex items-center justify-center gap-4">
            <img :src="getImagePath(item.image.desktop)" :alt="item.name" class="w-16 h-16 object-cover rounded-lg" />
            <div class="flex flex-col">
                <h3 class="text-black font-bold">{{ getShortName(item.name) }}</h3>
                <p class="text-gray-500 font-semibold text-sm">$ {{ item.price.toLocaleString() }}</p>
            </div>
        </div>
        <div class="flex items-center bg-gray-100 py-2 px-2 text-[13px]">
            <button @click="decreaseQuantity" :disabled="item.quantity <= 1"
                class="font-bold px-3 hover:text-[#D87D4A] disabled:opacity-50">
                -
            </button>
            <p class="px-4 font-bold min-w-[2rem] text-center">
                {{ item.quantity }}
            </p>
            <button @click="increaseQuantity" class="font-bold px-3 hover:text-[#D87D4A]">
                +
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['update-quantity', 'remove-item']);

const getImagePath = (path) => {
    return path.replace("./", "/src/");
};

const getShortName = (name) => {
    // Shorten product names for cart display
    if (name.includes('XX99 Mark II')) return 'XX99 MK II';
    if (name.includes('XX99 Mark I')) return 'XX99 MK I';
    if (name.includes('XX59')) return 'XX59';
    if (name.includes('ZX9')) return 'ZX9';
    if (name.includes('ZX7')) return 'ZX7';
    if (name.includes('YX1')) return 'YX1';
    return name;
};

const increaseQuantity = () => {
    emit('update-quantity', props.item.id, props.item.quantity + 1);
};

const decreaseQuantity = () => {
    if (props.item.quantity > 1) {
        emit('update-quantity', props.item.id, props.item.quantity - 1);
    } else {
        emit('remove-item', props.item.id);
    }
};
</script>
