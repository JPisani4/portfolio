<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Technical Skills",
    icon: "",
    to: "#technical-skills",
  },
  {
    label: "Projects",
    icon: "",
    to: "#projects",
  },
  {
    label: "Contact",
    icon: "",
    to: "#contact",
  },
]);
</script>

<template>
  <a href="/"><img src="" alt="logo" class="logo" /></a>

  <UNavigationMenu :items="items" variant="link" />
</template>
