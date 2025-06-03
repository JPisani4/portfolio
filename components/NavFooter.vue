<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    to: "https://github.com/JPisani4",
    target: "_blank",
  },
  {
    label: "Stack Overflow",
    icon: "",
    to: "https://stackoverflow.com/users/9598729/jordan-pisani",
    target: "_blank",
  },
  {
    label: "LinkedIn",
    icon: "",
    to: "https://www.linkedin.com/in/jordanpisani",
    target: "_blank",
  },
]);
</script>

<template>
  <UNavigationMenu :items="items" variant="link" />

  <div class="footer__copyright">
    &copy; 2019-2025 Jordan Pisani. All rights reserved.
  </div>
</template>
