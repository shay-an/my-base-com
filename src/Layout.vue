<template>
    <el-container class="wrapper">
        <appside-bar />
        <el-container diraction="vertaical">
            <app-nav-bar/>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AppsideBar from '@/components/sideBar.vue'
import NavBar from '@/components/navBar.vue'

@Component({
  components: {
    'appside-bar': AppsideBar,
    'app-nav-bar': NavBar
  }
})
export default class LayoutIndex extends Vue {

}
</script>
