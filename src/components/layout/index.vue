<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AppsideBar from './components/sideBar.vue'
import NavBar from './components/navBar.vue'

@Component({
  components: {
    'appside-bar': AppsideBar,
    'app-nav-bar': NavBar
  }
})
export default class LayoutIndex extends Vue {

}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #4878b8;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  margin-bottom: 40px;
  background-color: rgb(153, 51, 51);
}

</style>
