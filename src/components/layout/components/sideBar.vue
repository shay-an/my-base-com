<template>
  <el-aside class="sidebar" width="auto">
    <router-link
      class="logo"
      :to="{name: 'home'}"
      title="Back to Home"
      >
      div
    </router-link>
  </el-aside>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class SideBar extends Vue {

}
</script>
