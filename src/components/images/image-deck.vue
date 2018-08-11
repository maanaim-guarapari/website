<template lang="html">
<b-card-group deck class="image-cards-deck">
  <image-card v-for="img in images"
              :href="img.href ? img.href : false"
              :to="img.to ? img.to : false"
              :alt="img.alt"
              :src="img.src"
              :target="img.target ? img.target : target"
              :key="img.href + img.src"/>
</b-card-group>
</template>

<script>

import ImageCard from '@/components/images/image-card.vue'

export default {
  components: {
    ImageCard
  },
  props: [
    'images',
    'target'
  ]
}
</script>

<style lang="scss">
.image-cards-deck {
  padding: 15px;
}

</style>
