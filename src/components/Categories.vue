<template>
  <div
    class="pt-16 md:pt-20 lg:pt-30 flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-6 lg:gap-8">
    <CategoryCard v-for="category in categories" :key="category.id" :CategoryImage="category.image"
      :CategoryName="category.name" @navigate="navigateToCategory(category.route)" class="w-full md:w-1/3" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import CategoryCard from "./CategoryCard.vue";

const router = useRouter();

const categories = [
  {
    id: 1,
    image: "/src/assets/shared/desktop/image-category-thumbnail-headphones.png",
    name: "HEADPHONES",
    route: "/headphones",
  },
  {
    id: 2,
    image: "/src/assets/shared/desktop/image-category-thumbnail-speakers.png",
    name: "SPEAKERS",
    route: "/speakers",
  },
  {
    id: 3,
    image: "/src/assets/shared/desktop/image-category-thumbnail-earphones.png",
    name: "EARPHONES",
    route: "/earphones",
  },
];

const navigateToCategory = (route) => {
  router.push(route);
};
</script>
