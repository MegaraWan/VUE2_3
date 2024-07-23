<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  // 通过路由规则，进入该组件时
  beforeRouteEnter(to, from, next) {
    // 这里面可以写很多逻辑,如鉴权
    // 判断即将进入的当前页面是否需要鉴权,其实就是他自己
    if (to.meta.isAuth) { 
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对,没有权限查看");
      }
    } else {
      next();
    }
  },
  // 通过路由规则，离开该组件时
  beforeRouteLeave(to, from, next) {
    console.log("准备离开");
    next();
  },
};
</script>

<style>
</style>