<template>
  <div>{{ name }}</div>
</template>

<script setup lang="ts">
const name = ref("");
onMounted(async () => {
  const res = await fetch("/api/hello/Rob");
  const json = await res.json();
  name.value = json.name;
});
</script>

<style scoped></style>
