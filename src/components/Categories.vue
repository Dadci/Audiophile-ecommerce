<template>
  <div class="pt-30 flex flex-row items-center justify-end w-full gap-8">
    <CategoryCard
      v-for="category in categories"
      :key="category.id"
      :CategoryImage="category.image"
      :CategoryName="category.name"
      @navigate="navigateToCategory(category.route)"
    />
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
