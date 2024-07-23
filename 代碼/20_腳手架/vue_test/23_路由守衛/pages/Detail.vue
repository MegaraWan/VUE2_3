<template>
  <div>
    <ul>
      <!-- 渲染从message页面传递过来的参数 -->
      <li>消息编号：{{ $route.params.id }}</li>
      <li>消息内容：{{ $route.params.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style>
</style>