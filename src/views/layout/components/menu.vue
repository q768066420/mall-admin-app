<template>
  <div style="width: 180px" class="left-nav-container" ref="menu">
    <a-menu
      class="left-nav"
      :default-selected-keys="[defaultSelected]"
      :default-open-keys="[defaultOpen]"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="route in $store.state.router.userInfo">
        <a-sub-menu :key="route.name" v-if="!route.meta.hidden">
          <span slot="title"
            ><a-icon type="mail" /><span>{{ route.meta.title }}</span></span
          >
          <template v-for="child in route.children">
          <a-menu-item :key="child.name" v-if="!(child.meta.hidden === false)">
            <router-link :to="{ name: child.name }">
              {{ child.meta.title }}</router-link
            >
          </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState('menu', ['collapsed']),
  methods: {
    // toggleCollapsed() {
    //   this.collapsed = !this.collapsed;
    // },
  },
  created() {
    this.defaultSelected = this.$router.currentRoute.matched[1]
      ? this.$router.currentRoute.matched[1].name
      : '';
    this.defaultOpen = this.$router.currentRoute.matched[0].name;
  },
  data() {
    return {
      defaultSelected: '',
      defaultOpen: '',
    };
  },
};
</script>

<style scoped lang="less">
.left-nav-container {
  height: 100vh;
  position: fixed;
  .left-nav {
    height: 100%;
  }
}
</style>
