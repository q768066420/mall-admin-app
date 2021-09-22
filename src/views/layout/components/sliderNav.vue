<template>
  <div class="slider-nav-container">
    <!-- button按钮 -->
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <!-- 面包屑 -->
    <a-breadcrumb class="breadCrumb" v-if="currentRoute.matched.length > 1">
      <a-breadcrumb-item
        ><router-link
          :to="{
            name: currentRoute.matched[0].meta.name,
          }"
          >{{ currentRoute.matched[0].meta.title }}</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item
        ><router-link
          :to="{
            name: currentRoute.matched[1].meta.name,
          }"
          >{{ currentRoute.matched[1].meta.title }}</router-link
        ></a-breadcrumb-item
      >
    </a-breadcrumb>
    <!-- 右侧下拉菜单 -->
    <a-dropdown class="dropdown">
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        {{ user.username }} <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="#" @click="loginBtn">退出</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      currentRoute: this.$router.currentRoute,
    };
  },
  watch: {
    $route() {
      this.currentRoute = this.$router.currentRoute;
    },
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('menu', ['collapsed']),
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('menu/setColl');
    },
    loginBtn() {
      this.$store.dispatch('user/removeUserAct');
      this.$router.push({
        name: 'login',
      });
    },
  },
};
</script>

<style scoped lang='less'>
.breadCrumb {
  display: inline-block;
  margin-left: 20px;
}
.dropdown {
  float: right;
}
.dropdown::after {
  contain: "";
  display: block;
  clear: both;
}
</style>
