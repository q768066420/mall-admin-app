<template>
  <div class="login-container">
    <router-view />
    <a-breadcrumb class="bottom-nav">
       <a-breadcrumb-item><router-link :to="{
        name:'loginPage'
      }">登陆</router-link></a-breadcrumb-item>
      <a-breadcrumb-item><router-link :to="{
        name:'loginSign'
      }">注册账号</router-link></a-breadcrumb-item>
      <a-breadcrumb-item>忘记密码</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import url("~@/assets/css/login.less");
</style>
