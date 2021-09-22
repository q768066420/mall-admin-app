<template>
  <div class="index-container">
    <Card />
    <div>
      <VChar />
    </div>
  </div>
</template>

<script>
import Card from '@/components/card/index.vue';
import VChar from '@/components/char/index.vue';

export default {
  components: {
    Card,
    VChar,
  },
};
</script>

<style>
</style>
