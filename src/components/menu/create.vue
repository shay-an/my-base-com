<template>
  <div>
    <create-or-update :isEdit="false"/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import CreateOrUpdate from './compomenents/CreateOrUpdate.vue'

export default Vue.extend({
  name: 'menuList',
  components: {
    CreateOrUpdate
  },
  data () {
    return {}
  }
})
</script>
<style lang="scss">
</style>
