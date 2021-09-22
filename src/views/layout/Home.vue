<template>
  <div class="app-container">
    <!-- 左侧导航 -->
    <Menu  :key="key"/>
    <!-- 右侧内容区 -->
    <div :class='{"right-container":true,"right-container-menu":collapsed}'>
      <!-- 顶部导航 -->
      <SliderNav />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Menu from './components/menu.vue';
import SliderNav from './components/sliderNav.vue';

export default {
  name: 'Home',
  computed: {
    ...mapState('menu', ['collapsed']),
  },
  components: {
    Menu,
    SliderNav,
  },
  data() {
    return {
      key: new Date().getTime(),
    };
  },
  watch: {
    $route() {
      this.key = new Date().getTime();
    },
  },
};
</script>
<style scoped lang="less">
.app-container{
  position: relative;
}
.right-container{
 margin-left: 180px;
 height: 50px;
 border-bottom: 1px solid #eee;
 padding-left: 10px;
 padding-right: 20px;
 line-height: 50px;
 &.right-container-menu{
   margin-left: 80px;
 };
 transition: all 0.3s;
}
</style>
