<template lang="html">
  <div style="display: inline-block;">
    <b-btn :variant="btnVariant ? btnVariant : 'default'" v-b-modal="id" style="padding:5px;margin:3px;">
      {{ title }}
    </b-btn>
    <b-modal :id="id" :size="size ? size : ''" :title="title" hide-footer>
      <div v-html="content">
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'title',
    'content',
    'btnVariant',
    'size'
  ]
}
</script>

<style lang="scss">
</style>
