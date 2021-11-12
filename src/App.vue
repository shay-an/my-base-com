<template>
  <div id="app">
    <layout-index/>
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import LayoutIndex from './Layout.vue'
// import request from './utils/request'

@Component({
  components: {
    LayoutIndex
  }
})
export default class App extends Vue {

}
</script>
<style lang="scss"></style>
