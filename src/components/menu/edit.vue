<template>
  <div>
    <create-or-update :isEdit="true"/>
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
.el-card__header {
  height: 60px;
  line-height: 20px;
}
</style>
