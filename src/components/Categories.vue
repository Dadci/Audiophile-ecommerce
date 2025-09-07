<template>
  <div
    class="pt-20 md:pt-24 lg:pt-32 flex flex-col md:flex-row items-center justify-center w-full gap-16 md:gap-6 lg:gap-8">
    <CategoryCard v-for="category in categories" :key="category.id" :CategoryImage="category.image"
      :CategoryName="category.name" @navigate="navigateToCategory(category.route)" class="w-full md:w-1/3" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import CategoryCard from "./CategoryCard.vue";
import headphonesImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

const router = useRouter();

const categories = [
  {
    id: 1,
    image: headphonesImage,
    name: "HEADPHONES",
    route: "/headphones",
  },
  {
    id: 2,
    image: speakersImage,
    name: "SPEAKERS",
    route: "/speakers",
  },
  {
    id: 3,
    image: earphonesImage,
    name: "EARPHONES",
    route: "/earphones",
  },
];

const navigateToCategory = (route) => {
  router.push(route);
};
</script>
